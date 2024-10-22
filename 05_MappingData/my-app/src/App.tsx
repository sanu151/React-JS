import Result from "./components/Result";
import Data from "./data.json";

interface StudentResult {
  studentId: number;
  name: string;
  math: number;
  science: number;
  english: number;
}

const items: StudentResult[] = Data.map((item: StudentResult) => ({
  studentId: item.studentId,
  name: item.name,
  math: item.math,
  science: item.science,
  english: item.english,
}));

function App() {
  return (
    <>
      <div>
        <h1>Mapping Data To Components</h1>
        <table>
          <caption>Student Grades (Total Marks : 300)</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Math</th>
              <th>Science</th>
              <th>English</th>
              <th>Total</th>
              <th>Persentage(%)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Result
                key={item.studentId} // Add a unique key for each item
                studentId={item.studentId}
                name={item.name}
                math={item.math}
                science={item.science}
                english={item.english}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
