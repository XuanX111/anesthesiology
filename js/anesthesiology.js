$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var result = $("#result");
    var surgicalExtent = $("#surgical-extent").val();
    var surgicalLocation = $("#surgical-location").val();
    var surgicalPosition = $("#surgical-position").val();
    var procedureDuration = $("#procedure-duration").val();
    var bmi = $("#bmi").val();

    if (surgicalExtent === "major") {
      result.text("GA + Neuraxial Blockade");
    }
    else {
      if (surgicalLocation === "upper-extremities") {
        if (surgicalPosition === "prone"
          || surgicalPosition === "supine"
          || procedureDuration === "3-hours-or-longer"
          || bmi === "40-or-above") {
          result.text("GA + PNB");
        }
        else if (surgicalExtent === "moderate") {
          result.text("PNB and sedation or GA");
        }
        else if (surgicalExtent === "minor") {
          result.text("PNB and (sedation or GA or local)");
        }
      }
      else if (surgicalLocation === "lower-extremities") {
        if (surgicalPosition === "supine" || surgicalPosition === "lateral") {
          if (procedureDuration === "3-hours-or-longer" || bmi === "40-or-above") {
            result.text("GA + PNB");
          }
          else if (surgicalExtent === "moderate") {
            result.text("PNB and spinal or GA");
          }
          else if (surgicalExtent === "minor") {
            result.text("PNB and (spinal or local anesthesia or GA)");
          }
        }
        else if (surgicalPosition === "prone") {
          if (surgicalExtent === "minor") {
            result.text("GA, sedation, spinal, or local anesthesia");
          }
          else if (surgicalExtent === "moderate") {
            result.text("GA + PNB");
          }
        }
      }
      else if (surgicalLocation === "abdominal-or-spinal") {
        if (surgicalPosition === "prone") {
          if (surgicalExtent === "moderate") {
            result.text("GA");
          }
          else if (surgicalExtent === "minor") {
            result.text("GA or sedation");
          }
        }
        else if (surgicalPosition === "supine") {
          if (procedureDuration === "3-hours-or-longer" || bmi === "40-or-above") {
            result.text("GA");
          }
          else {
            if (surgicalExtent === "moderate") {
              result.text("Spinal + sedation or GA");
            }
            else if (surgicalExtent === "minor") {
              result.text("Spinal or GA");
            }
          }
        }
      }
    }
  });
});