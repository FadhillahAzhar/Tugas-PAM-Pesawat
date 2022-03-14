const Jadwal = [
    {
        id_jadwal: "01",
        asal: "CGK",
        tujuan: "PLM",
        id_maskapai: "GIA",
        tanggal: "2022-10-10"
    },
    {
        id_jadwal: "02",
        asal: "HLP",
        tujuan: "TKG",
        id_maskapai: "BTK",
        tanggal: "2022-10-10"
    },
    {
        id_jadwal: "03",
        asal: "TKG",
        tujuan: "CGK",
        id_maskapai: "LNI",
        tanggal: "2022-10-10"
    },
    {
        id_jadwal: "04",
        asal: "TKG",
        tujuan: "CGK",
        id_maskapai: "SJY",
        tanggal: "2022-10-10"
    },
]

const Maskapai = [
    {
        id_maskapai:"BTK",
        nama_maskapai:"Garuda Indonesia"
    },
    {
        id_maskapai:"GIA",
        nama_maskapai:"Garuda Indonesia"
    },
    {
        id_maskapai:"LNI",
        nama_maskapai:"Lion Air"
    },
    {
        id_maskapai:"SJY",
        nama_maskapai:"Sriwijaya Air"
    },
    
]

const Bandara = [
    {
        kode_bandara: "CGK",
        nama_bandara: "Soekarno Hatta",
    },
    {
        kode_bandara: "PLM",
        nama_bandara: "Sultan Mahmud Badaruddin II",
    },
    {
        kode_bandara: "HLP",
        nama_bandara: "Halim Perdana Kusuma",
    },
    {
        kode_bandara: "TKG",
        nama_bandara: "Radin Inten",
    },
]

export {Maskapai, Bandara, Jadwal}