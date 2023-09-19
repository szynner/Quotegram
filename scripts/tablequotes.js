// Get a reference to the tbody element
const tbody = document.getElementById("quote-table-body");

// Loop through the quotes array
for (const quote of quotes) {
    // Create a new table row (tr element)
    const row = document.createElement("tr");

    // Create table data cells (td elements) for the English and French text, and author
    const engCell = document.createElement("td");
    const fraCell = document.createElement("td");
    const authorCell = document.createElement("td");

    // Set the text content of the cells to the corresponding values from the quote object
    engCell.textContent = quote.engText;
    fraCell.textContent = quote.fraText;
    authorCell.textContent = quote.author;

    // Append the cells to the row
    row.appendChild(engCell);
    row.appendChild(fraCell);
    row.appendChild(authorCell);

    // Append the row to the tbody
    tbody.appendChild(row);
}





