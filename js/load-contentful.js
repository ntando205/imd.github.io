const SPACE_ID = 'tnnsbx8am8jx';
const ACCESS_TOKEN = 'mHLrvF6F-7B8lAAQHsbzAEschMIXZdpnLQzOs4vqibA';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const serviceContainer = document.getElementById("services");

client.getEntries({ content_type: 'service' })
  .then((response) => {
    response.items.forEach((item) => {
      const { title, price, image } = item.fields;
      const imageUrl = image.fields.file.url;

      const html = `
        <div class="bg-white shadow-md rounded-2xl p-6" data-aos="zoom-in">
          <img src="https:${imageUrl}" alt="${title}" class="rounded-xl mb-4 w-full max-h-80 object-contain">
          <h3 class="text-xl font-semibold mb-1">${title}</h3>
          <p class="text-gray-500 text-sm font-medium mb-2">From R${price} each</p>
        </div>
      `;

      serviceContainer.innerHTML += html;
    });
  })
  .catch(console.error);
