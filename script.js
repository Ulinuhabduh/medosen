// Data Obat Hipnotik

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
        dosis: "0.5 - 1.0 mg",
        OOA: "45 - 60s",
        DOA: "1 - 2 jam",
      },
      Premedikasi: {
        rute: "Intra Vena, Intra Muskuler",
        dosis: "0.4 - 1.0 mg",
        minDosis: 0.4,
        maxDosis: 1,
        OOA: "5 - 40 mnt",
        DOA: "1 - 2 jam",
      },
    },
  },
};

// Fungsi untuk menampilkan pilihan kegunaan berdasarkan obat yang dipilih
function tampilkanKegunaan() {
  const obatSelect = document.getElementById("obat");
  const kegunaanSelect = document.getElementById("kegunaan");
  const ruteSelect = document.getElementById("rute");

  // Bersihkan pilihan kegunaan dan rute
  kegunaanSelect.innerHTML = "<option value=''>Pilih Kegunaan</option>";
  ruteSelect.innerHTML = "<option value=''>Pilih Rute</option>";

  const selectedObat = obatSelect.value;
  const selectedDataHipnotik = dataHipnotik[selectedObat];
  const selectedDataAnalgesik = dataAnalgesik[selectedObat];
  const selectedDataResusitasi = dataResusitasi[selectedObat];

  // Tampilkan pilihan kegunaan
  if (selectedDataHipnotik) {
    Object.keys(selectedDataHipnotik.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  } else if (selectedDataAnalgesik) {
    Object.keys(selectedDataAnalgesik.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  } else if (selectedDataResusitasi) {
    Object.keys(selectedDataResusitasi.kegunaan).forEach((kegunaan) => {
      const option = document.createElement("option");
      option.text = kegunaan;
      kegunaanSelect.add(option);
    });
  }
}

// Fungsi untuk menampilkan pilihan rute berdasarkan kegunaan yang dipilih
function tampilkanRute() {
  const obatSelect = document.getElementById("obat");
  const kegunaanSelect = document.getElementById("kegunaan");
  const ruteSelect = document.getElementById("rute");

  const selectedObat = obatSelect.value;
  const selectedKegunaan = kegunaanSelect.value;

  const selectedDataHipnotik = dataHipnotik[selectedObat];
  const selectedDataAnalgesik = dataAnalgesik[selectedObat];
  const selectedDataResusitasi = dataResusitasi[selectedObat];

  // Bersihkan pilihan rute
  ruteSelect.innerHTML = "<option value=''>Pilih Rute</option>";

  // Tampilkan pilihan rute
  if (selectedDataHipnotik) {
    const selectedKegunaanData = selectedDataHipnotik.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  } else if (selectedDataAnalgesik) {
    const selectedKegunaanData = selectedDataAnalgesik.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  } else if (selectedDataResusitasi) {
    const selectedKegunaanData = selectedDataResusitasi.kegunaan[selectedKegunaan];
    const ruteData = selectedKegunaanData.rute;
    if (typeof ruteData === "object") {
      Object.keys(ruteData).forEach((rute) => {
        const option = document.createElement("option");
        option.text = rute;
        ruteSelect.add(option);
      });
    } else {
      const option = document.createElement("option");
      option.text = ruteData;
      ruteSelect.add(option);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hasilDiv = document.querySelector(".hasil");
  const form = document.querySelector("form");

  // Sembunyikan div "hasil" saat halaman dimuat
  hasilDiv.style.display = "none";

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Hindari perilaku default submit form

    // Ambil nilai dari input obat
    const obatSelect = document.getElementById("obat");
    const selectedObat = obatSelect.value;

    // Ambil nilai dari input spuit
    const spuitInput = document.getElementById("spuit");
    const spuit = spuitInput.value;
    const spuitValue = parseInt(spuit);

    // Ambil nilai dari input sediaan
    const sediaanInput = document.getElementById("sediaan");
    const sediaanValue = sediaanInput.value;

    // Ambil nilai dari input kegunaan
    const kegunaanSelect = document.getElementById("kegunaan");
    const selectedKegunaan = kegunaanSelect.value;

    // Ambil nilai dari input rute
    const ruteSelect = document.getElementById("rute");
    const selectedRute = ruteSelect.value;

    // Ambil nilai dari input berat_badan
    const beratBadanInput = document.getElementById("berat_badan");
    const beratBadan = beratBadanInput.value;

    // Tampilkan div "hasil" dengan nilai-nilai yang diinputkan
    hasilDiv.style.display = "block";

    // Tampilkan nilai obat pada elemen "namaObat" di div "hasil"
    const namaObatElem = document.getElementById("namaObat");
    namaObatElem.textContent = `Nama Obat: ${selectedObat}`;

    // Tampilkan nilai kegunaan pada elemen "fungsi" di div "hasil"
    const fungsiElem = document.getElementById("fungsi");
    fungsiElem.textContent = `Kegunaan: ${selectedKegunaan}`;

    // Tampilkan nilai rute pada elemen "path" di div "hasil"
    const pathElem = document.getElementById("path");
    pathElem.textContent = `Rute: ${selectedRute}`;

    let dosis = "";
    let obatData = null; // Deklarasikan obatData di luar blok if
    let minDosis, maxDosis; // Deklarasikan minDosis dan maxDosis di luar blok if
    const konsentrasiPengenceran = 10000; // Nilai konstan sesuai dengan rumus

    // Ambil data dosis dari dictionary berdasarkan obat, kegunaan, dan rute yang dipilih
    if (selectedObat && selectedKegunaan && selectedRute) {
      obatData = dataHipnotik[selectedObat] || dataAnalgesik[selectedObat] || dataResusitasi[selectedObat];
      if (obatData) {
        if (obatData.kegunaan[selectedKegunaan].rute && typeof obatData.kegunaan[selectedKegunaan].rute === "object") {
          const ruteData = obatData.kegunaan[selectedKegunaan].rute[selectedRute];
          minDosis = ruteData.minDosis;
          maxDosis = ruteData.maxDosis;
          dosis = ruteData.dosis;
        } else {
          minDosis = obatData.kegunaan[selectedKegunaan].minDosis;
          maxDosis = obatData.kegunaan[selectedKegunaan].maxDosis;
          dosis = obatData.kegunaan[selectedKegunaan].dosis;
        }
      }
    }

    // Tampilkan nilai dosis pada elemen "dosis" di div "hasil"
    const dosisElem = document.getElementById("dosis");
    dosisElem.textContent = `Dosis: ${dosis}`;

    // Hitung nilai pengenceran berdasarkan rumus yang diberikan
    let pengenceranMin = "";
    let pengenceranMax = "";

    if (dosis && obatData.kegunaan && obatData.kegunaan[selectedKegunaan]) {
      pengenceranMin = ((minDosis * beratBadan) / (sediaanValue * konsentrasiPengenceran)) * spuitValue;
      pengenceranMax = ((maxDosis * beratBadan) / (sediaanValue * konsentrasiPengenceran)) * spuitValue;

      pengenceranMin = pengenceranMin;
    }

    // Tampilkan nilai pengenceran pada elemen "pengenceran" di div "hasil"
    const pengenceranElem = document.getElementById("pengenceran");
    pengenceranElem.textContent = `Dosis Pengenceran: ${pengenceranMin} - ${pengenceranMax}`;
  });
});



