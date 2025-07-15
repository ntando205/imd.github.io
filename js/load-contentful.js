const SPACE_ID = 'tnnsbx8am8jx';
const ACCESS_TOKEN = 'mHLrvF6F-7B8lAAQHsbzAEschMIXZdpnLQzOs4vqibA';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const servicesGrid = document.getElementById("services-grid");

client.getEntries({ content_type: 'service' })
  .then((response) => {
    response.items.forEach((item) => {
      const { title, price, image } = item.fields;
      const imageUrl = image.fields.file.url;

      // Create the service card
      const serviceCard = document.createElement("div");
      serviceCard.className = "bg-white shadow-md rounded-2xl p-6";
      serviceCard.setAttribute("data-aos", "zoom-in");

      serviceCard.innerHTML = `
        <img src="https:${imageUrl}" alt="${title}" class="rounded-xl mb-4 w-full object-contain max-h-70">
        <h3 class="text-xl font-semibold mb-2">${title}</h3>
        <p class="text-gray-800 font-bold text-lg mb-2">${price}</p>
      `;

      // Append it to the grid
      servicesGrid.appendChild(serviceCard);
    });
  })
  .catch(console.error);


  const galleryContainer = document.getElementById("gallery");

client.getEntries({ content_type: 'gallery' })
  .then((response) => {
    response.items.forEach((item) => {
      const { image } = item.fields;
      const imageUrl = image.fields.file.url;

      const html = `
        <img src="${imageUrl}" class="rounded-xl shadow w-full  object-contain max-h-80" data-aos="fade-up" />
      `;

      galleryContainer.innerHTML += html;
    });
  })
  .catch(console.error);
