//const pdfLib = require("https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.min.js");
//const pdfLib = require("pdfjs-dist/legacy/build/pdf");
const pdfjs = require("pdfjs-dist/legacy/build/pdf");

let pdfDoc = null,
  pageNumber = 1,
  pageRendering = false,
  pageNumPending = null,
  scale = 1.5,
  canvas = document.getElementById("pdf_canvas"),
  context = canvas.getContext("2d");

console.log("Rendered");

async function fetchData(sampleDoc) {
  const doc = await pdfjs.getDocument(sampleDoc).promise;
  return doc;
}

pdfDoc = fetchData("./sample.pdf");

console.log("data: ", pdfDoc);
document.getElementById("page_count").textContent = pdfDoc.numPages;

// fetchData().promise.then((doc) => {
//   pdfDoc = doc;
//   document.getElementById("page_count").textContent = pdfDoc.numPages;
// });

async function fetchOutline(samplePdfDoc) {
  const doc = await pdfjs.getDocument(samplePdfDoc).promise;
  //console.log(doc);
  // Get the outline
  const outlineNodes = await doc.getOutline();
  const docData = await doc.getMetadata();
  console.log("Data: ", docData);
  console.log(
    "Outlines are: ",
    outlineNodes.map((i) => i.title)
  );
}

fetchOutline("./sample.pdf");

console.log("rendered");
