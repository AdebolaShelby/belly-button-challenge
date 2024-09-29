// Load the data
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  let sampleData = data.samples;
  let metadata = data.metadata;

  // Populate the dropdown menu
  let dropdown = d3.select("#selDataset");
  sampleData.forEach(sample => {
      dropdown.append("option").text(sample.id).property("value", sample.id);
  });

  // Initialize the charts and metadata with the first individual
  let firstSample = sampleData[0];
  let firstMeta = metadata.filter(meta => meta.id == firstSample.id)[0]; // Get first sample's metadata
  buildBarChart(firstSample);
  buildBubbleChart(firstSample);
  buildMetadata(firstMeta);
});

// Listen for changes in the dropdown menu
d3.selectAll("#selDataset").on("change", updateCharts);

// Update the charts and metadata when a new individual is selected
function updateCharts() {
  let dropdown = d3.select("#selDataset");
  let selectedId = dropdown.property("value");

  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let selectedSample = data.samples.filter(sample => sample.id === selectedId)[0];
      let selectedMeta = data.metadata.filter(meta => meta.id == selectedId)[0]; // Get selected sample's metadata
      buildBarChart(selectedSample);
      buildBubbleChart(selectedSample);
      buildMetadata(selectedMeta);  // Update the metadata
  });
}

// Build the horizontal bar chart for the top 10 OTUs
function buildBarChart(sample) {
  let otu_ids = sample.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
  let sample_values = sample.sample_values.slice(0, 10).reverse();
  let otu_labels = sample.otu_labels.slice(0, 10).reverse();

  // Create the trace
  let trace = {
      x: sample_values,
      y: otu_ids,
      text: otu_labels,
      type: "bar",
      orientation: "h"
  };

  // Define the layout
  let layout = {
      title: `Top 10 OTUs for Individual ${sample.id}`,
      margin: { t: 30, l: 150 },
      width: 800  // Set the width of the chart
  };

  Plotly.newPlot("bar", [trace], layout);
}

// Build the bubble chart
function buildBubbleChart(sample) {
  let otu_ids = sample.otu_ids;
  let sample_values = sample.sample_values;
  let otu_labels = sample.otu_labels;

  // Create the trace for the bubble chart
  let trace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
          size: sample_values,      // Size of the bubbles
          color: otu_ids,           // Color of the bubbles
          colorscale: "Earth"       // You can choose other color scales as well
      }
  };

  // Define the layout for the bubble chart
  let layout = {
      title: `OTUs for Individual ${sample.id}`,
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      showlegend: false,
      height: 600,
      width: 1000  // Set the width of the chart
  };

  Plotly.newPlot("bubble", [trace], layout);
}

// Build the metadata panel
function buildMetadata(meta) {
  // Select the panel with id #sample-metadata
  let metadataPanel = d3.select("#sample-metadata");

  // Clear any existing metadata
  metadataPanel.html("");

  // Add each key-value pair to the panel
  Object.entries(meta).forEach(([key, value]) => {
      metadataPanel.append("h6").text(`${key}: ${value}`);
  });
}
