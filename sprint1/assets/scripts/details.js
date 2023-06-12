function detailTemplate(event) {
  return `
    <img src="${event.image}" alt="evento">
    <section class="details">
        <h1>${event.name}</h1>
        <p>Date: ${event.date}</p>
        <p>${event.description}</p>
        <p>Place: ${event.place}</p>
        <p>Capacity: ${event.capacity}</p>
        <p>Estimate: ${event.assistance}</p>
        <p>Price: ${event.price}</p>
    </section>`;
}
function makeDetails(arr) {
  const detail = document.getElementById("details-card");
  const a = new URLSearchParams(location.search);
  const id = a.get("_id");

  const event = arr.find((i) => i._id === id);
  detail.innerHTML = detailTemplate(event);
}
