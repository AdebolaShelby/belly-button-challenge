# Belly Button Biodiversity Dashboard
* This project creates an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes found in human navels. The dataset reveals that a small number of microbial species (called OTUs) are found in more than 70% of people, while the rest are relatively rare.

# Features
* The dashboard provides the following functionality:

* Dropdown Menu: Allows users to select an individual sample from the dataset.
* Horizontal Bar Chart: Displays the top 10 OTUs for the selected individual, with hover text showing OTU labels.
* Bubble Chart: Visualizes all OTUs for the selected individual, with bubble sizes corresponding to sample values and colors representing OTU IDs.
* Metadata Panel: Shows demographic information for the selected individual, such as age, gender, and location.


#Files
1. app.js
* This JavaScript file contains all the code for generating the interactive elements of the dashboard using the Plotly and D3 libraries. The major sections of the code are:

* Data Loading: Data is fetched from a JSON file via a d3.json() request.
* Dropdown Menu: A dropdown menu is populated with individual sample IDs from the dataset.
* Bar Chart: A horizontal bar chart displays the top 10 OTUs found for the selected individual, using OTU IDs as labels and sample values as bar lengths.
* Bubble Chart: A bubble chart visualizes all OTUs found for the individual, with bubble sizes reflecting sample values and colors representing OTU IDs.
* Metadata Panel: Demographic information for the selected individual is displayed in a panel on the page, with key-value pairs updated when a new individual is selected.

2. index.html
* This HTML file contains the structure of the dashboard, with div elements for the dropdown menu, bar chart, bubble chart, and metadata panel. The relevant JavaScript libraries (D3 and Plotly) are included in this file.

3. samples.json
The dataset in JSON format is fetched directly from the URL: https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json

* This dataset includes:

    * samples: Microbial sample data for each individual.
    * metadata: Demographic information (age, gender, location, etc.) for each individual.

# How It Works
* Data Loading: When the dashboard is loaded, the d3.json() function fetches the data from the provided URL. The sample IDs are used to populate the dropdown menu.

* Initial Display: The first individual’s data is displayed by default when the page loads. This includes:

    * The top 10 OTUs in a bar chart.
    * All OTUs in a bubble chart.
    * Demographic information in the metadata panel.
* User Interaction: When the user selects a different individual from the dropdown menu:

    * The bar and bubble charts update to reflect the selected individual’s microbial data.
    * The metadata panel is updated with the selected individual’s demographic information.

