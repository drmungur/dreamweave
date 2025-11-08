async function generate() {
  const idea1 = document.getElementById("idea1").value.trim();
  const idea2 = document.getElementById("idea2").value.trim();
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const card = document.getElementById("result");

  if (!idea1 || !idea2) {
    alert("Please enter both ideas!");
    return;
  }

  // Show a temporary loading message
  title.innerText = "Thinking...";
  desc.innerText = "Assembling ideas with AI magic...";
  card.classList.remove("hidden");

  try {
    const res = await fetch("http://localhost:3001/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea1, idea2 }),
    });
    const data = await res.json();
    const text = data.text || "Something went wrong.";

    // Split the AI reply into first line (title) + rest (description)
    const lines = text.split("\n");
    title.innerText = lines[0];
    desc.innerText = lines.slice(1).join(" ");
  } catch (err) {
    desc.innerText = "⚠️ Error talking to AI.";
    console.error(err);
  }
}


function clearAll() {
  document.getElementById("idea1").value = "";
  document.getElementById("idea2").value = "";
  document.getElementById("result").classList.add("hidden");
}

