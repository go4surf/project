$(document).ready(function() {
    // Funktion, um Daten aus der URL zu extrahieren und Formular zu füllen
    function datenInFormularFuellen() {
      // Holen der Parameter aus der URL
      const urlParams = new URLSearchParams(window.location.search);
      const maschinennummerParam = urlParams.get('Maschinennummer');
      const codeParam = urlParams.get('Code');
  
      // Füllen der Formularfelder
      $('#maschinennummer').val(maschinennummerParam || '');
      $('#code').val(codeParam || '');
    }
  
    // Daten füllen beim Laden der Seite
    datenInFormularFuellen();
  
    // Formularabsendung verarbeiten
    $('#meinFormular').submit(function(event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenneuladung)
  
      // Hier kannst du den Code zur Verarbeitung der Formulardaten einfügen
      // Zum Beispiel: Daten sammeln, validieren und per E-Mail senden
  
      alert('Formular wurde abgeschickt!');
    });
  });
  