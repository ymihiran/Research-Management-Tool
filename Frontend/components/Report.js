import jsPDF from "jspdf";

import "jspdf-autotable";



// Date Fns is used to format the dates we receive

// from our API call

//import { format } from "date-fns";

//import { report } from "../../../BACKEND/routes/delivery/deliverydetails";



// define a generatePDF function that accepts a tickets argument

const generatePDF = (report,specialization,schemeType,marks) => {

  // initialize jsPDF

  const doc = new jsPDF();

  const spec = specialization;
  alert(spec);



  // define the columns we want and their titles

  const tableColumn = ["No", "Criteria", "Marks", "Marking"];

  // define an empty array of rows

  const tableRows = [];



  // for each ticket pass all its data into an array

  let no = 0;

  report.forEach(report => {

    no++;

    const reportData = [

      no,
      report.des,
      report.mark,



      // called date-fns to format the date on the report

     // format(new Date(report.updated_at), "yyyy-MM-dd")

    ];

    // push each tickcet's info into a row

    tableRows.push(reportData);

  });




  // startY is basically margin-top

  doc.autoTable(tableColumn, tableRows, { startY: 20 });

  const date = Date().split(" ");

  // we use a date string to generate our filename.

 // const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  // ticket title. and margin-top + margin-left

  doc.text("Closed report within the last one month."+spec, 14, 15);


  // we define the name of our PDF file.

  doc.save(`report_.pdf`);

};



export default generatePDF;