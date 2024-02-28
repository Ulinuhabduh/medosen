// Dictionary Obat

const dataHipnotik = {
  Propofol: {
    kegunaan: {
      Induksi: {
        dosis: "2 - 2.5 mg/kg",
        minDosis: 2,
        maxDosis: 2.5,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      Maintenance: {
        dosis: "6 - 10 mg/kg/jam",
        minDosis: 6,
        maxDosis: 10,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      Sedasi: {
        dosis: "25 - 100 μg/kg/mnt",
        minDosis: 25,
        maxDosis: 100,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
    },
  },
  Thiopental: {
    kegunaan: {
      Induksi: {
        dosis: "4 - 6 mg/kg",
        minDosis: 4,
        maxDosis: 6,
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      Maintenance: {
        dosis: "1 - 3 mg/kg/jam",
        minDosis: 1,
        maxDosis: 3,
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      Sedasi: {
        dosis: "1 - 3 mg/kg/jam",
        minDosis: 1,
        maxDosis: 3,
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
    },
  },
  Ketamin: {
    kegunaan: {
      "Induksi IV": {
        dosis: "1 - 3 mg/kg",
        minDosis: 1,
        maxDosis: 3,
        OOA: "30s",
        DOA: "10 - 20 mnt",
      },
      "Intra Muskular": {
        dosis: "8 - 13 mg/kg",
        minDosis: 8,
        maxDosis: 13,
        OOA: "30s",
        DOA: "10 - 20 mnt",
      },
    },
  },
};

const dataAnalgesik = {
  Morfin: {
    kegunaan: {
      Premedikasi: {
        rute: "Intra Muskuler",
        dosis: "0.05 - 0.2 mg/kg",
        minDosis: 0.05,
        maxDosis: 0.2,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Intra Operasi": {
        rute: "Intra Vena",
        dosis: "0.1 - 1 mg/kg",
        minDosis: 0.1,
        maxDosis: 1,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Post Operasi": {
        rute: {
          "Intra Muskuler": {
            dosis: "0.05 - 0.2 mg/kg",
            minDosis: 0.05,
            maxDosis: 0.2,
            OOA: "5-10 mnt",
            DOA: "3-5 jam",
          },
          "Intra Vena": {
            dosis: "0.03 - 0.15 mg/kg",
            minDosis: 0.03,
            maxDosis: 0.15,
            OOA: "5-10 mnt",
            DOA: "3-5 jam",
          },
        },
      },
    },
  },
  Petidin: {
    kegunaan: {
      Premedikasi: {
        rute: "Intra Muskuler",
        dosis: "0.5 - 1 mg/kg",
        minDosis: 0.5,
        maxDosis: 1,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Intra Operatif": {
        rute: "Intra Vena",
        dosis: "2.5 - 5 mg/kg",
        minDosis: 2.5,
        maxDosis: 5,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Post Operatif": {
        rute: {
          "Intra Muskuler": {
            dosis: "0.5 - 1 mg/kg",
            minDosis: 0.5,
            maxDosis: 1,
            OOA: "5-10 mnt",
            DOA: "2-3 jam",
          },
          "Intra Vena": {
            dosis: "0.2 - 0.5 mg/kg",
            minDosis: 0.2,
            maxDosis: 0.5,
            OOA: "5-10 mnt",
            DOA: "2-3 jam",
          },
        },
      },
    },
  },
  Fentanyl: {
    kegunaan: {
      "Intra Operatif": {
        rute: "Intra Vena",
        dosis: "2 - 50 mcg/kg",
        minDosis: 2,
        maxDosis: 50,
        OOA: "2 mnt",
        DOA: "45 mnt - 2 jam",
      },
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "0.5 - 1.5 mcg/kg",
        minDosis: 0.5,
        maxDosis: 1.5,
        OOA: "2 mnt",
        DOA: "45 mnt - 2 jam",
      },
    },
  },
  Sufetanil: {
    kegunaan: {
      Analgesia: {
        rute: "Intra Muskuler / Intra Vena",
        dosis: "0.2 - 0.6 mcg/kg",
        minDosis: 0.2,
        maxDosis: 0.6,
        OOA: "1 - 3 mnt",
        DOA: "IV: 20 - 45 mnt IM: 2 - 4 Jam",
      },
      Induksi: {
        rute: "Intra Vena",
        dosis: "2 - 10 mcg/kg",
        minDosis: 2,
        maxDosis: 10,
        OOA: "1 - 3 mnt",
        DOA: "IV: 20 - 45 mnt IM: 2 - 4 Jam",
      },
    },
  },
  Alfetanil: {
    kegunaan: {
      Analgesia: {
        rute: "Intra Muskuler / Intra Vena",
        dosis: "5 - 10 mcg/kg",
        minDosis: 5,
        maxDosis: 10,
        OOA: "1 - 2 mnt",
        DOA: "1 - 2 Jam",
      },
      Induksi: {
        rute: "Intra Vena",
        dosis: "50 - 300 mcg/kg",
        minDosis: 50,
        maxDosis: 300,
        OOA: "1 - 2 mnt",
        DOA: "1 - 2 Jam",
      },
    },
  },
  Remifeentanil: {
    kegunaan: {
      Analgesia: {
        rute: "Intra Vena",
        dosis: "0.5 - 1.0 mg/kg",
        minDosis: 0.5,
        maxDosis: 2.5,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      Induksi: {
        rute: "Intra Vena",
        dosis: "1 mcg/kg",
        fixDosis: 1,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
    },
  },
  Buprenorphine: {
    kegunaan: {
      Premedikasi: {
        rute: "Intra Vena",
        dosis: "400 mcg/kg",
        fixDosis: 400,
        OOA: "30 mnt",
        DOA: "24 jam",
      },
      Analgesia: {
        rute: "Intra Vena",
        dosis: "200 - 400 mcg/kg",
        minDosis: 200,
        maxDosis: 400,
        OOA: "30 mnt",
        DOA: "24 jam",
      },
    },
  },
  Hydromorphone: {
    kegunaan: {
      Analgesia: {
        rute: {
          "Intra Vena": {
            dosis: "0.01 - 0.04 mg/kg",
            minDosis: 0.01,
            maxDosis: 0.04,
            OOA: "15 - 30 mnt",
            DOA: "4 - 6 jam",
          },
          "Intra Muskuler": {
            dosis: "0.04 - 0.08 mg/kg",
            minDosis: 0.04,
            maxDosis: 0.08,
            OOA: "15 - 30 mnt",
            DOA: "4 - 6 jam",
          },
        },
      },
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "2 - 10 mcg/kg",
        minDosis: 2,
        maxDosis: 10,
        OOA: "15 - 30 mnt",
        DOA: "4 - 6 jam",
      },
    },
  },
  Diamorphine: {
    kegunaan: {
      Analgesia: {
        rute: "Intra Vena",
        dosis: "< 400 mg/injeksi",
        fixDosis: 400,
        OOA: "2 - 3 mnt",
        DOA: "-",
      },
    },
  },
  Tramadol: {
    kegunaan: {
      "Post Operatif": {
        rute: "Intra Vena",
        dosis: "50 - 100 mg/kg",
        minDosis: 50,
        maxDosis: 100,
        OOA: "1 jam",
        DOA: "6 - 9 jam",
      },
    },
  },
};

const dataResusitasi = {
  Ephedrine: {
    kegunaan: {
      "Hipotensi/Bronkospasme": {
        rute: {
          "Intra Vena": {
            dosis: "5 - 20 mg",
            minDosis: 5,
            maxDosis: 20,
            OOA: "2 - 5 mnt",
            DOA: "10 - 60 mnt",
          },
          "Intra Muskuler": {
            dosis: "25 - 50 mg",
            minDosis: 25,
            maxDosis: 50,
            OOA: "< 10 mnt",
            DOA: "10 - 60 mnt",
          },
        },
      },
    },
  },
  "Sulfat Atropin": {
    kegunaan: {
      "Bradikardia Sinus": {
        rute: "Intra Vena, Intra Muskuler",
        dosisDewasa: "0.5 - 1.0 mg",
        minDosisDewasa: 0.5,
        maxDosisDewasa: 1,
        dosisAnak: "10 - 20 mg/kg",
        minDosisAnak: 10,
        maxDosisAnak: 20,
        OOA: "45 - 60s",
        DOA: "1 - 2 jam",
      },
      Premedikasi: {
        rute: "Intra Vena,Intra Muskuler",
        dosis: "0.4 - 1.0 mg",
        minDosis: 0.4,
        maxDosis: 1,
        OOA: "5 - 40 mnt",
        DOA: "1 - 2 jam",
      },
    },
  },
};


// ----------------------------------------------------------------------------------------------------


document.getElementById("calculationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get user inputs
  const selectedObat = document.getElementById("obat").value;
  const spuit = parseInt(document.getElementById("spuit").value);
  const sediaan = parseFloat(document.getElementById("sediaan").value);
  const beratBadan = parseFloat(document.getElementById("berat_badan").value);

  // Get the selected data based on the category of the selectedObat
  let selectedData;
  if (dataHipnotik[selectedObat]) {
    selectedData = dataHipnotik[selectedObat].kegunaan;
  } else if (dataAnalgesik[selectedObat]) {
    selectedData = dataAnalgesik[selectedObat].kegunaan;
  } else if (dataResusitasi[selectedObat]) {
    selectedData = dataResusitasi[selectedObat].kegunaan;
  }

  // Generate HTML for displaying dosage information
  let dosageInfoHTML = "<h3>Informasi Dosis Pengenceran</h3>";
  if (selectedData) {
    for (const kegunaan in selectedData) {
      if (selectedData.hasOwnProperty(kegunaan)) {
        const rute = selectedData[kegunaan].rute || "-";
        const dosisPengenceranMin = selectedData[kegunaan].minDosis ? ((selectedData[kegunaan].minDosis * beratBadan) / (sediaan * 10000)) * spuit : "-";
        const dosisPengenceranMax = selectedData[kegunaan].maxDosis ? ((selectedData[kegunaan].maxDosis * beratBadan) / (sediaan * 10000)) * spuit : "-";
        const dosisPengenceran = selectedData[kegunaan].fixDosis ? ((selectedData[kegunaan].fixDosis * beratBadan) / (sediaan * 10000)) * spuit : "-";

        // Generate dosage information based on conditions
        let dosageInfo;
        if (dosisPengenceran !== "-") {
          dosageInfo = `${kegunaan} => ${rute} : ${dosisPengenceran.toFixed(2)} ml`;
        } else if (dosisPengenceranMin !== "-" && dosisPengenceranMax !== "-") {
          dosageInfo = `${kegunaan} => ${rute} : ${dosisPengenceranMin.toFixed(2)} ml ---> ${dosisPengenceranMax.toFixed(2)} ml`;
        } else if (selectedData[kegunaan].minDosisDewasa && selectedData[kegunaan].maxDosisDewasa && selectedData[kegunaan].minDosisAnak && selectedData[kegunaan].maxDosisAnak) {
          const dosisPengenceranMinDewasa = ((selectedData[kegunaan].minDosisDewasa * beratBadan) / (sediaan * 10000)) * spuit;
          const dosisPengenceranMaxDewasa = ((selectedData[kegunaan].maxDosisDewasa * beratBadan) / (sediaan * 10000)) * spuit;
          const dosisPengenceranMinAnak = ((selectedData[kegunaan].minDosisAnak * beratBadan) / (sediaan * 10000)) * spuit;
          const dosisPengenceranMaxAnak = ((selectedData[kegunaan].maxDosisAnak * beratBadan) / (sediaan * 10000)) * spuit;
          dosageInfo = `${kegunaan} => Dewasa : ${dosisPengenceranMinDewasa.toFixed(2)} ml ---> ${dosisPengenceranMaxDewasa.toFixed(2)} ml, Anak : ${dosisPengenceranMinAnak.toFixed(2)} ml ---> ${dosisPengenceranMaxAnak.toFixed(2)} ml`;
        } else {
          dosageInfo = `${kegunaan} => ${dosisPengenceranMin.toFixed(2)} ml ---> ${dosisPengenceranMax.toFixed(2)} ml`;
        }

        dosageInfoHTML += `<p>${dosageInfo}</p>`;
      }
    }
  } else {
    dosageInfoHTML += `<p>Data obat tidak ditemukan.</p>`;
  }

  // Display dosage information
  const hasilElement = document.querySelector(".hasil");
  hasilElement.innerHTML = dosageInfoHTML;
});

// ----------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const obat = document.getElementById("obat").value;
    const spuit = parseInt(document.getElementById("spuit").value);
    const sediaan = parseFloat(document.getElementById("sediaan").value);
    const beratBadan = parseFloat(document.getElementById("berat_badan").value);

    let dosisPengenceran = [];

    // Mendapatkan data obat dari dictionary yang sesuai
    let dataObat;
    if (dataHipnotik[obat]) {
      dataObat = dataHipnotik[obat];
    } else if (dataAnalgesik[obat]) {
      dataObat = dataAnalgesik[obat];
    } else if (dataResusitasi[obat]) {
      dataObat = dataResusitasi[obat];
    }

    // Menampilkan informasi dosis pengenceran
    const infoDosis = document.createElement("div");
    infoDosis.innerHTML = `<h3>Informasi Dosis Pengenceran</h3>`;

    if (dataObat) {
      for (const kegunaan in dataObat.kegunaan) {
        const kegunaanData = dataObat.kegunaan[kegunaan];

        // Mendapatkan dosis pengenceran sesuai kondisi
        let dosis;
        if (kegunaanData.fixDosis !== undefined) {
          dosis = ((kegunaanData.fixDosis * beratBadan) / (sediaan * 10000)) * spuit;
        } else {
          dosis = {
            min: ((kegunaanData.minDosis * beratBadan) / (sediaan * 10000)) * spuit,
            max: ((kegunaanData.maxDosis * beratBadan) / (sediaan * 10000)) * spuit,
          };
        }

        // Menampilkan informasi dosis pengenceran sesuai format
        let dosisInfo;
        if (kegunaanData.fixDosis !== undefined) {
          dosisInfo = `<p>${kegunaan} => Dosis Pengenceran: ${dosis.toFixed(5)} ml</p>`;
        } else {
          dosisInfo = `<p>${kegunaan} => Dosis Pengenceran: ${dosis.min.toFixed(5)} - ${dosis.max.toFixed(5)} ml</p>`;
        }
        infoDosis.innerHTML += dosisInfo;
      }
    } else {
      const dosisInfo = document.createElement("p");
      dosisInfo.textContent = "Tidak ada informasi dosis pengenceran untuk obat yang dipilih.";
      infoDosis.appendChild(dosisInfo);
    }

    // Memperbarui tampilan dengan hasil perhitungan
    const existingInfo = document.querySelector("#calculationForm > div.hasil");
    if (existingInfo) {
      existingInfo.replaceWith(infoDosis);
    } else {
      infoDosis.classList.add("hasil"); // Menambahkan class "hasil" ke elemen div
      form.appendChild(infoDosis);
    }
  });
});


// -------------------------------------------------------------------------------------------------------------------

// document.getElementById("calculationForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the form from submitting and refreshing the page

//   // Get user inputs
//   const selectedObat = document.getElementById("obat").value;
//   const spuit = parseInt(document.getElementById("spuit").value);
//   const sediaan = parseFloat(document.getElementById("sediaan").value);
//   const beratBadan = parseFloat(document.getElementById("berat_badan").value);

//   // Get the selected data based on the category of the selectedObat
//   let selectedData;
//   if (dataHipnotik[selectedObat]) {
//     selectedData = dataHipnotik[selectedObat].kegunaan;
//   } else if (dataAnalgesik[selectedObat]) {
//     selectedData = dataAnalgesik[selectedObat].kegunaan;
//   } else if (dataResusitasi[selectedObat]) {
//     selectedData = dataResusitasi[selectedObat].kegunaan;
//   }

//   // Generate HTML for displaying dosage information
//   let dosageInfoHTML = "<h3>Informasi Dosis Pengenceran</h3>";
//   if (selectedData) {
//     for (const kegunaan in selectedData) {
//       if (selectedData.hasOwnProperty(kegunaan)) {
//         const rute = selectedData[kegunaan].rute || "-";
//         let dosisPengenceran;

//         // Handling specific cases mentioned
//         if (
//           (selectedObat === "Morfin" && kegunaan === "Post Operasi") ||
//           (selectedObat === "Petidin" && kegunaan === "Post Operatif") ||
//           (selectedObat === "Hydromorphone" && kegunaan === "Analgesia") ||
//           (selectedObat === "Ephedrine" && kegunaan === "Hipotensi/Bronkospasme")
//         ) {
//           // Generate dosage information based on specific cases
//           dosisPengenceran = Object.entries(selectedData[kegunaan].rute)
//             .map(([ruteKey, ruteValue]) => {
//               const dosis = ((ruteValue.minDosis * beratBadan) / (sediaan * 10000)) * spuit;
//               return `${ruteKey}: ${dosis.toFixed(2)} ml`;
//             })
//             .join(", ");
//         } else {
//           // Generate dosage information for other cases
//           const dosisPengenceranMin = selectedData[kegunaan].minDosis ? ((selectedData[kegunaan].minDosis * beratBadan) / (sediaan * 10000)) * spuit : "-";
//           const dosisPengenceranMax = selectedData[kegunaan].maxDosis ? ((selectedData[kegunaan].maxDosis * beratBadan) / (sediaan * 10000)) * spuit : "-";
//           dosisPengenceran = dosisPengenceranMin !== "-" && dosisPengenceranMax !== "-" ? `${dosisPengenceranMin.toFixed(2)} ml ---> ${dosisPengenceranMax.toFixed(2)} ml` : "-";
//         }

//         // Generate dosage information based on conditions
//         dosageInfoHTML += `<p>${kegunaan} => ${rute} : ${dosisPengenceran}</p>`;
//       }
//     }
//   } else {
//     dosageInfoHTML += `<p>Data obat tidak ditemukan.</p>`;
//   }

//   // Display dosage information
//   const hasilElement = document.querySelector(".hasil");
//   hasilElement.innerHTML = dosageInfoHTML;
// });
