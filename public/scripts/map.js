L.mapbox.accessToken = 'pk.eyJ1IjoibmdyaWZmaW4yMyIsImEiOiJjazc5aWh1a3UwdHB3M2VvNXhlYmR3YXR2In0.QO9fBjrYHuL0fRBYCS3uqw'; 

const map = L.mapbox.map('map', 'mapbox.streets').setView([37.78, -122.44], 14);


  const listings = document.getElementById('listings');
  const locations = L.mapbox.featureLayer().addTo(map);

  locations.loadURL('https://data.sfgov.org/resource/jjew-r69b.geojson'); // load in your own GeoJSON file here

  function setActive(el) {
    const siblings = listings.getElementsByTagName('div');
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].className = siblings[i].className
        .replace(/active/, '').replace(/\s\s*$/, '');
    }

    el.className += ' active';
  }

  locations.on('ready', function() {
    locations.eachLayer(function(locale) {

      let prop = locale.feature.properties;

      // Each marker on the map.
      let popup = `<h3>${prop.applicant}</h3><div>` + prop.location;

      let listing = listings.appendChild(document.createElement('div'));
          listing.className = 'item';

      let link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';

      link.innerHTML = prop.location;
      if (prop.location) {
        link.innerHTML += '<br /><small class="quiet" <h4>Day :</h4> ' + prop.dayofweekstr + '</small>';
        // popup += '<br /><small class="quiet">' + prop.dayofweekstr + '</small>';
      }
      if (prop.location) {
        link.innerHTML += '<br /><small class="quiet" <h4>Open :</h4> ' + prop.starttime + '</small>';
        // popup += '<br /><small class="quiet">' + prop.starttime + '</small>';
      }
      if (prop.location) {
        link.innerHTML += '<br /><small class="quiet" <h4>Close :</h4> ' + prop.endtime + '</small>';
        // popup += '<br /><small class="quiet">' + prop.endtime + '</small>';
      }


      let details = listing.appendChild(document.createElement('div'));
      details.innerHTML = ` Food Served: ${prop.optionaltext}`
     

      link.onclick = function() {
        setActive(listing);

        // When a menu item is clicked, animate the map to center
        // its associated locale and open its popup.
        map.setView(locale.getLatLng(), 16);
        locale.openPopup();
        return false;
      };

      // Marker interaction
      locale.on('click', function(e) {
          // 1. center the map on the selected marker.
          map.panTo(locale.getLatLng());

          // 2. Set active the markers associated listing.
          setActive(listing);
      });

      popup += '</div>';
      locale.bindPopup(popup);
    });
  });

  locations.on('layeradd', function(e) {
    const marker = e.layer;
    marker.setIcon(L.icon({
      iconUrl: 'https://i.imgur.com/klUh95z.png',
      iconSize: [40, 40],
      iconAnchor: [28, 28],
      popupAnchor: [0, -34]
    }));
  });