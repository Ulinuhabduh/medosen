// Dictionary Obat

const dataHipnotik = {
  Propofol: {
    kegunaan: {
      Induksi: {
        rute: "-",
        dosis: "2 - 2.5 mg/kg",
        minDosis: 2,
        maxDosis: 2.5,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      Maintenance: {
        rute: "-",
        dosis: "6 - 10 mg/kg/jam",
        minDosis: 6,
        maxDosis: 10,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      Sedasi: {
        rute: "-",
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
        rute: "-",
        dosis: "4 - 6 mg/kg",
        minDosis: 4,
        maxDosis: 6,
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      Maintenance: {
        rute: "-",
        dosis: "1 - 3 mg/kg/jam",
        minDosis: 1,
        maxDosis: 3,
        OOA: "10s",
        DOA: "5 - 15 mnt",
      },
      Sedasi: {
        rute: "-",
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
        rute: "-",
        dosis: "1 - 3 mg/kg",
        minDosis: 1,
        maxDosis: 3,
        OOA: "30s",
        DOA: "10 - 20 mnt",
      },
      "Intra Muskular": {
        rute: "-",
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
      "Premedikasi (Intra Muskuler)": {
        dosis: "0.05 - 0.2 mg/kg",
        minDosis: 0.05,
        maxDosis: 0.2,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Intra Operasi (Intra Vena)": {
        rute: "",
        dosis: "0.1 - 1 mg/kg",
        minDosis: 0.1,
        maxDosis: 1,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Post Operasi (Intra Muskuler)": {
        dosis: "0.05 - 0.2 mg/kg",
        minDosis: 0.05,
        maxDosis: 0.2,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
      "Post Operasi (Intra Vena)": {
        dosis: "0.03 - 0.15 mg/kg",
        minDosis: 0.03,
        maxDosis: 0.15,
        OOA: "5-10 mnt",
        DOA: "3-5 jam",
      },
    },
  },
  Petidin: {
    kegunaan: {
      "Premedikasi (Intra Muskuler)": {
        rute: "",
        dosis: "0.5 - 1 mg/kg",
        minDosis: 0.5,
        maxDosis: 1,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Intra Operatif (Intra Vena)": {
        rute: "",
        dosis: "2.5 - 5 mg/kg",
        minDosis: 2.5,
        maxDosis: 5,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Post Operatif (Intra Muskuler)": {
        rute: "",
        dosis: "0.5 - 1 mg/kg",
        minDosis: 0.5,
        maxDosis: 1,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
      "Post Operatif (Intra Vena)": {
        rute: "",
        dosis: "0.2 - 0.5 mg/kg",
        minDosis: 0.2,
        maxDosis: 0.5,
        OOA: "5-10 mnt",
        DOA: "2-3 jam",
      },
    },
  },
  Fentanyl: {
    kegunaan: {
      "Intra Operatif (Intra Vena)": {
        rute: "",
        dosis: "2 - 50 mcg/kg",
        minDosis: 2,
        maxDosis: 50,
        OOA: "2 mnt",
        DOA: "45 mnt - 2 jam",
      },
      "Post Operatif (Intra Vena)": {
        rute: "",
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
      "Analgesia (Intra Muskuler / Intra Vena)": {
        rute: "",
        dosis: "0.2 - 0.6 mcg/kg",
        minDosis: 0.2,
        maxDosis: 0.6,
        OOA: "1 - 3 mnt",
        DOA: "IV: 20 - 45 mnt IM: 2 - 4 Jam",
      },
      "Induksi (Intra Vena)": {
        rute: "",
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
      "Analgesia (Intra Muskuler / Intra Vena)": {
        rute: "",
        dosis: "5 - 10 mcg/kg",
        minDosis: 5,
        maxDosis: 10,
        OOA: "1 - 2 mnt",
        DOA: "1 - 2 Jam",
      },
      "Induksi (Intra Vena)": {
        rute: "",
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
      "Analgesia (Intra Vena)": {
        rute: "",
        dosis: "0.5 - 1.0 mg/kg",
        minDosis: 0.5,
        maxDosis: 2.5,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
      "Induksi (Intra Vena)": {
        rute: "",
        dosis: "1 mcg/kg",
        fixDosis: 1,
        OOA: "30s",
        DOA: "5 - 10 mnt",
      },
    },
  },
  Buprenorphine: {
    kegunaan: {
      "Premedikasi (Intra Vena)": {
        rute: "",
        dosis: "400 mcg/kg",
        fixDosis: 400,
        OOA: "30 mnt",
        DOA: "24 jam",
      },
      "Analgesia (Intra Vena)": {
        rute: "",
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
      "Analgesia (Intra Vena)": {
        dosis: "0.01 - 0.04 mg/kg",
        minDosis: 0.01,
        maxDosis: 0.04,
        OOA: "15 - 30 mnt",
        DOA: "4 - 6 jam",
      },
      "Anagesia (Intra Muskuler)": {
        dosis: "0.04 - 0.08 mg/kg",
        minDosis: 0.04,
        maxDosis: 0.08,
        OOA: "15 - 30 mnt",
        DOA: "4 - 6 jam",
      },
      "Post Operatif (Intra Vena)": {
        rute: "",
        dosis: "2 - 10 mcg/kg",
        minDosis: 2,
        maxDosis: 10,
        OOA: "15 - 30 mnt",
        DOA: "4 - 6 jam",
      },
    },
    Diamorphine: {
      kegunaan: {
        "Analgesia (Intra Vena)": {
          rute: "",
          dosis: "< 400 mg/injeksi",
          fixDosis: 400,
          OOA: "2 - 3 mnt",
          DOA: "-",
        },
      },
    },
    Tramadol: {
      kegunaan: {
        "Post Operatif (Intra Vena)": {
          rute: "",
          dosis: "50 - 100 mg/kg",
          minDosis: 50,
          maxDosis: 100,
          OOA: "1 jam",
          DOA: "6 - 9 jam",
        },
      },
    },
  },
}

const dataResusitasi = {
  Ephedrine: {
    kegunaan: {
      "Hipotensi/Bronkospasme (Intra Vena)": {
            dosis: "5 - 20 mg",
            minDosis: 5,
            maxDosis: 20,
            OOA: "2 - 5 mnt",
            DOA: "10 - 60 mnt",
          },
      "Hipotensi/Bronkospasme (Intra Muskuler)": {
            dosis: "25 - 50 mg",
            minDosis: 25,
            maxDosis: 50,
            OOA: "< 10 mnt",
            DOA: "10 - 60 mnt",
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
    infoDosis.innerHTML = `<p class="obat text-center text-primary">Dosis Pengenceran ${obat}</p>`;
    const infoBerat = `<p class="fs-5 text-center text-dark">Berat Badan : ${beratBadan} kg</p>`;
    infoDosis.innerHTML += infoBerat;
    const infoSediaan = `<p class="fs-5 text-center text-dark">Sediaan : ${sediaan} gr/ml</p>`;
    infoDosis.innerHTML += infoSediaan;

    if (dataObat) {
      for (const kegunaan in dataObat.kegunaan) {
        const kegunaanData = dataObat.kegunaan[kegunaan];

        // Mendapatkan dosis pengenceran sesuai kondisi
        let dosis;
        if (kegunaanData.fixDosis !== undefined) {
          dosis = ((kegunaanData.fixDosis * beratBadan) / (sediaan * 10000)) * spuit;
        } else if (kegunaanData.minDosis !== undefined || kegunaanData.maxDosis !== undefined) {
          dosis = {
            min: ((kegunaanData.minDosis * beratBadan) / (sediaan * 10000)) * spuit,
            max: ((kegunaanData.maxDosis * beratBadan) / (sediaan * 10000)) * spuit,
          };
        } else {
          dosis = {
            minDewasa: ((kegunaanData.minDosisDewasa) / (sediaan * 10000)) * spuit,
            maxDewasa: ((kegunaanData.maxDosisDewasa) / (sediaan * 10000)) * spuit,

            minAnak: ((kegunaanData.minDosisAnak * beratBadan) / (sediaan * 10000)) * spuit,
            maxAnak: ((kegunaanData.maxDosisAnak * beratBadan) / (sediaan * 10000)) * spuit,
          }
        }

        // Menampilkan informasi dosis pengenceran sesuai format
        let dosisInfo;
        if (kegunaanData.fixDosis !== undefined) {
          dosisInfo = `<p><strong class="text-success">${kegunaan}</strong> => <strong></strong> Dosis Pengenceran: <strong>${dosis.toFixed(5)}</strong> ml</p>`;
        } else if (kegunaanData.minDosis !== undefined || kegunaanData.maxDosis !== undefined) {
          dosisInfo = `<p><strong class="text-success">${kegunaan}</strong> => <strong></strong> Dosis Pengenceran: <strong>${dosis.min.toFixed(5)}</strong> - <strong>${dosis.max.toFixed(5)}</strong> ml</p>`;
        } else {
          dosisInfo = `<p><strong class="text-success">${kegunaan}</strong> => Dosis Pengenceran Dewasa: <strong>${dosis.minDewasa.toFixed(5)}</strong> - <strong>${dosis.maxDewasa.toFixed(5)}</strong> ml</p>`;
          dosisInfo += `<p><strong class="text-success">${kegunaan}</strong> => Dosis Pengenceran Anak: <strong>${dosis.minAnak.toFixed(5)}</strong> - <strong>${dosis.maxAnak.toFixed(5)}</strong> ml</p>`;
        }
        infoDosis.innerHTML += dosisInfo;
      }
    } else {
      const dosisInfo = document.createElement("p");
      dosisInfo.textContent = "Tidak ada informasi dosis pengenceran untuk obat yang dipilih.";
      infoDosis.appendChild(dosisInfo);
    }

    // Memperbarui tampilan dengan hasil perhitungan
    const existingInfo = document.querySelector(".hasil");
    if (existingInfo) {
      existingInfo.replaceWith(infoDosis);
    } else {
      infoDosis.classList.add("result");
      form.insertBefore(infoDosis, form.childNodes[10]);
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
