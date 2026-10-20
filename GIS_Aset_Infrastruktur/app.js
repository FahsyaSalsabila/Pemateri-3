// GeoAset: demo GIS untuk pencatatan dan pemantauan aset infrastruktur.
// Peta menggunakan Leaflet dan tile OpenStreetMap. Data contoh bersifat simulasi.

const STORAGE_KEY = "geoaset-assets-v1";
const sampleAssets = [
  { id: 1, name: "Jalan Soeprapto", category: "Jalan", condition: "Baik", lat: -3.8004, lng: 102.2655 },
  { id: 2, name: "Jembatan Sungai Hitam", category: "Jembatan", condition: "Perlu Perbaikan", lat: -3.7660, lng: 102.2790 },
  { id: 3, name: "Taman Pantai Panjang", category: "Fasilitas Umum", condition: "Baik", lat: -3.8172, lng: 102.2565 },
  { id: 4, name: "Jalan Pangeran Natadirja", category: "Jalan", condition: "Perlu Perbaikan", lat: -3.8270, lng: 102.2860 },
  { id: 5, name: "Lapangan Merdeka", category: "Fasilitas Umum", condition: "Baik", lat: -3.7890, lng: 102.2630 }
];

function loadAssets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [...sampleAssets];
  } catch (error) {
    console.warn("Data lokal tidak dapat dibaca; memakai data contoh.", error);
    return [...sampleAssets];
  }
}

let assets = loadAssets();
const map = L.map("map").setView([-3.800, 102.270], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const conditionFilter = document.getElementById("conditionFilter");
const assetTable = document.getElementById("assetTable");

function saveAssets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
}

function filteredAssets() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const condition = conditionFilter.value;
  return assets.filter(asset => {
    const matchesKeyword = `${asset.name} ${asset.category}`.toLowerCase().includes(keyword);
    const matchesCategory = category === "Semua" || asset.category === category;
    const matchesCondition = condition === "Semua" || asset.condition === condition;
    return matchesKeyword && matchesCategory && matchesCondition;
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function render() {
  const shown = filteredAssets();
  markerLayer.clearLayers();
  assetTable.innerHTML = "";

  shown.forEach(asset => {
    const markerColor = asset.condition === "Baik" ? "#16845b" : "#d74747";
    const marker = L.circleMarker([asset.lat, asset.lng], {
      radius: 8, color: "#ffffff", weight: 2, fillColor: markerColor, fillOpacity: 1
    }).addTo(markerLayer);
    marker.bindPopup(`<strong>${escapeHtml(asset.name)}</strong><br>${escapeHtml(asset.category)}<br>Kondisi: ${escapeHtml(asset.condition)}<br><small>${asset.lat.toFixed(5)}, ${asset.lng.toFixed(5)}</small>`);

    const row = document.createElement("tr");
    const conditionClass = asset.condition === "Baik" ? "good" : "bad";
    row.innerHTML = `
      <td>${escapeHtml(asset.name)}</td>
      <td>${escapeHtml(asset.category)}</td>
      <td><span class="pill ${conditionClass}">${escapeHtml(asset.condition)}</span></td>
      <td>${asset.lat.toFixed(4)}, ${asset.lng.toFixed(4)}</td>
      <td>
        <button class="table-action view" data-action="view" data-id="${asset.id}">Lihat</button>
        <button class="table-action delete" data-action="delete" data-id="${asset.id}">Hapus</button>
      </td>`;
    assetTable.appendChild(row);
  });

  document.getElementById("totalCount").textContent = assets.length;
  document.getElementById("goodCount").textContent = assets.filter(a => a.condition === "Baik").length;
  document.getElementById("repairCount").textContent = assets.filter(a => a.condition === "Perlu Perbaikan").length;
  document.getElementById("emptyMessage").classList.toggle("hidden", shown.length > 0);
}

[searchInput, categoryFilter, conditionFilter].forEach(element => element.addEventListener("input", render));

document.getElementById("assetForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("assetName").value.trim();
  const lat = Number(document.getElementById("latitude").value);
  const lng = Number(document.getElementById("longitude").value);
  if (!name || !Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    alert("Masukkan nama dan koordinat yang valid.");
    return;
  }
  const newAsset = {
    id: Date.now(),
    name,
    category: document.getElementById("assetCategory").value,
    condition: document.getElementById("assetCondition").value,
    lat, lng
  };
  assets.push(newAsset);
  saveAssets();
  event.target.reset();
  render();
  map.setView([lat, lng], 15);
  alert("Aset berhasil ditambahkan ke peta.");
});

assetTable.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = Number(button.dataset.id);
  const asset = assets.find(item => item.id === id);
  if (!asset) return;
  if (button.dataset.action === "view") {
    map.setView([asset.lat, asset.lng], 16);
    markerLayer.eachLayer(marker => {
      const point = marker.getLatLng();
      if (Math.abs(point.lat - asset.lat) < 0.000001 && Math.abs(point.lng - asset.lng) < 0.000001) marker.openPopup();
    });
  } else if (button.dataset.action === "delete") {
    if (confirm(`Hapus aset "${asset.name}"?`)) {
      assets = assets.filter(item => item.id !== id);
      saveAssets();
      render();
    }
  }
});

document.getElementById("resetButton").addEventListener("click", () => {
  if (confirm("Pulihkan data contoh? Data yang ditambahkan akan dihapus.")) {
    assets = [...sampleAssets];
    saveAssets();
    searchInput.value = "";
    categoryFilter.value = "Semua";
    conditionFilter.value = "Semua";
    render();
    map.setView([-3.800, 102.270], 13);
  }
});

render();
