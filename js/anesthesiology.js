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

  $("#surgical-position option[value='lateral']").hide();

  $("#surgical-location").change(function() {
    $("#surgical-position option").hide();
    var surgicalLocation = $(this).val();
    $("#surgical-position option[value='supine']").show();
    $("#surgical-position option[value='prone']").show();
    if (surgicalLocation === "lower-extremities") {
      $("#surgical-position option[value='lateral']").show();
    }
    else if (surgicalLocation === "upper-extremities") {
      $("#surgical-position option[value='beach-chair']").show();
    }
  });

  var modalInfos = [
    {
      title: "Surgical Extent",
      body: "<p>Elective major surgery will always go with a general anesthetic.\n" +
      "Under this category we have major abdominal thoracic and vascular procedures.\n" +
      "These are major procedures because they involve alterations in normal physiology.\n" +
      "i.e. Open abdominal surgery will impact breathing tidal volume and surgical stimulus is" +
      "severe mandating the patient is given large amounts of opioids and high concentrations of " +
      "inhalation gasses suppressing the drive to breath and compromising airway patency because " +
      "the patient is unconscious.</p>"
    },
    {
      title: "Surgical Position",
      body: "<p>Prone: Patient is positioned on his abdomen for surgery. This will typically call " +
      "a general anesthesia. The reason being that being unconcious for surgery compromises airway " +
      "patency and hence patient breathing. To control breathing during the case it is safer to " +
      "have the patient under general anesthesia with an endotracheal tube for the duration of the" +
      "procedure. That being said for some shorter procedures, in the right type of patients it was " +
      "shown that a spinal anesthetic can be done successfully.</p>" +
      "<p>Beach Chair: As the name implied, the patient is sitting in the upright position. This " +
      "is commonly done for shoulder surgery/upper forearm. The patient's head is typically being " +
      "fixated to the bed's frame to avoid bad positioning during the case. This interferes with any " +
      "outer manipulation of the patient's airway performed by the anesthesiologist during the case " +
      "if needed.</p>" +
      "<p>Supine: The patient is placed on his/her back and this allows either general anesthesia or " +
      "sedation with a neuroaxial technique.</p>"
    },
    {
      title: "Procedure Duration",
      body: "<p>Time is an important factor to sedating the patient in such a way that he is amnestic " +
      "(memory-less) of the procedure and is sufficiently comfortable on the operating table without " +
      "the need to use heavier medications which will render his airway compromised. This is also the upper " +
      "time limit of a spinal anesthetic. As a rule of thumb, most practicionters will agree that up " +
      "to 3 hours of sedation is adequate. Longer periods than that will probably result in the patient being " +
      "uncomfortable from lying on his/her back for so long. Some patients have neck and shoulder pain or " +
      "are just terrified by the idea of being lightly asleep while surgery takes place despite not feeling " +
      "anything.</p>"
    },
    {
      title: "BMI",
      body: "<p>Body Mass Index is a measure of how large/heavy set the patient is. This measure correlates " +
      "with major morbidities like diabetes hypertension but specifically for anesthesiologists it relates to " +
      "obstructive sleep apnea, which is highly correlated with high BMI. This condition renders these patients " +
      "very sensitive to opioids administered to them, which may cause them to stop breathing or to breath ineffectively " +
      "even at low dosages. In addition because of the changes in lung mechanics in the supine position obese patients " +
      "will have a quicker de-saturation of oxygen in their blood. Fat distribution " +
      "around the neck and face may present the anesthesiologists with difficulty controlling the airway without " +
      "a breathing tube. For all of these reasons, it is advisable to place high BMI patients under general anesthesia."
    }
  ];

  $("a").click(function() {
    var index = $(this).index("a");
    $(".modal-title").text(modalInfos[index].title);
    $(".modal-body").html(modalInfos[index].body);
  });
});