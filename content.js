const idToHide = ["div_for_graph"];
idToHide.forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
});
