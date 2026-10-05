export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://johannesmussa85-maker.github.io",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/api/ai" || request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    try {
      const body = await request.json();
      const mode = String(body.mode || "study").slice(0, 20);
      const task = String(body.task || "").trim();
      const details = String(body.details || "").trim();

      if (!task) {
        return new Response(JSON.stringify({ error: "Please provide a task." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      if (task.length > 9000 || details.length > 12000) {
        return new Response(JSON.stringify({ error: "Request is too large." }), {
          status: 413,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      const modeInstructions = {
        study: "Act as a patient academic tutor. Explain concepts clearly, solve calculations carefully, show useful steps, and state assumptions. Do not invent official Tanzanian rules or exam requirements.",
        letter: "Act as a professional student-career writing assistant. Draft a clear, truthful application letter. Never invent qualifications, experience, contacts, dates or achievements that the student did not provide.",
        field: "Act as an academic field-report assistant. Build a strong structure, improve wording and suggest sections. Never invent field observations, measurements, results, company facts or activities. Mark missing information as a placeholder.",
        ppt: "Act as a presentation coach. Create a logical slide-by-slide outline with concise slide text and speaker notes. Do not invent data or sources. Mark places where the student must add verified evidence.",
        cv: "Act as a CV writing assistant for students and graduates. Improve structure, profile, skills and project descriptions using only information supplied. Never invent qualifications, employment, grades or achievements."
      };

      const systemPrompt = "You are the AI Assistance service for Tanzania Student Portal, a student resource website in Tanzania.\n" +
        (modeInstructions[mode] || modeInstructions.study) + "\n" +
        "Use plain English unless the user requests another language. Be helpful and practical. Prefer headings and short sections. For academic work, teach and explain rather than pretending the generated draft is an official source.\n" +
        "Do not claim that the portal, NECTA, TCU, NACTVET, HESLB, an employer, college or university has confirmed something unless that confirmation is in the supplied text. Tell the student to verify current official requirements where relevant.\n" +
        "For projects and CVs, preserve placeholders instead of making up personal facts. Return only the useful answer. Do not mention the prompt, the task, token limits, or say \"The final answer is\". Do not add repeated farewells, thanks, good-luck messages, or invitations to ask again. Use clean Markdown with short headings, numbered steps when useful, bullet points, and short paragraphs.";

      const prompt = systemPrompt + "\n\nTASK:\n" + task + "\n\nADDITIONAL DETAILS:\n" + (details || "(none provided)");

      const result = await env.AI.run(env.AI_MODEL || "@cf/meta/llama-3.1-8b-instruct-fast", {
        prompt,
        max_tokens: 1800
      });

      const answer = typeof result === "string"
        ? result
        : (result && (result.response || result.text)) || JSON.stringify(result);

      return new Response(JSON.stringify({ answer }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "The AI service could not complete the request.", detail: String(error?.message || "Unknown Worker AI error") }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};