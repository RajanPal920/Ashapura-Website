import "./MaterialGrades.css";

const grades = [
  "SS 304",
  "SS 304L",
  "SS 316",
  "SS 316L",
  "SS 310",
  "SS 321",
  "Duplex 2205",
  "Duplex 2507",
  "Inconel Alloy",
  "SS Alloy",

];

function MaterialGrades() {
  return (
    <section className="material-grades">

      <div className="container">

        <div className="section-heading">
          <h2>Material Grades</h2>
          <p>
            Premium stainless steel and alloy grades
            available for industrial applications.
          </p>
        </div>

        <div className="grades-grid">

          {grades.map((grade) => (
            <div
              key={grade}
              className="grade-card"
            >
              {grade}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default MaterialGrades;