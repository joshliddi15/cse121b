/* async getTools Function using fetch()*/
const getTools = async () => {
  try {
      const response = await fetch('https://run.mocky.io/v3/aaae4172-ae5d-4d5d-8f6a-4b9ba503c077');
      const data = await response.json();
      return data.tools;
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
};

/* async displayTools Function */
const displayTools = (tools) => {
  const toolList = document.getElementById('toolList');
  toolList.innerHTML = '';
  tools.forEach(tool => {
      const toolItem = document.createElement('li');
      toolItem.classList.add('p-4', 'bg-blue-100', 'rounded-lg', 'shadow-md');
      toolItem.innerHTML = `
          <span class="font-semibold">${tool.name}</span>
          <p class="text-gray-500">Model Number: ${tool.model_number}</p>
          <p class="text-gray-500">Asset Number: ${tool.asset_number}</p>
          <p class="text-gray-500">Tool Location: ${tool.location}</p>
          <img src="${tool.image}" alt="${tool.name}" class="mt-2 max-w-40 max-h-40 mx-auto rounded">`;
      toolList.appendChild(toolItem);
  });
};

/* Function to filter tools based on search and filter criteria*/
const filterTools = (tools) => {
  const searchInput = document.getElementById('searchInput');
  const filterLocation = document.getElementById('filterSelect').value.toLowerCase();
  const searchTerm = searchInput.value.toLowerCase()
  const filteredTools = tools.filter(tool => {
      const nameMatch = tool.name.toLowerCase().includes(searchTerm);
      const locationMatch = filterLocation === '' || tool.location.toLowerCase() === filterLocation;
      return nameMatch && locationMatch;
  });
  displayTools(filteredTools);
};

/* Sort tools function */
const sortTools = (tools) => {
  const sortSelect = document.getElementById('sortSelect');
  const sortBy = sortSelect.value;
  const sortedTools = [...tools].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'location':
        return a.location.localeCompare(b.location);
      default:
        return tools;
    }
  });
  displayTools(sortedTools);
};

/* main function to add event listeners to inputs and call funciton to get and display tools */
const setupPage = async () => {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const filterSelect = document.getElementById('filterSelect');

  /* Fetch tools data, display tools, and set up event listners */
  const tools = await getTools();
  displayTools(tools);
  searchInput.addEventListener('input', () => filterTools(tools));
  sortSelect.addEventListener('change', () => sortTools(tools));
  filterSelect.addEventListener('change', () => filterTools(tools));
};

/* Call the setupPage function */
setupPage();