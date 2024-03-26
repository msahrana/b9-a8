import {useEffect, useState} from "react";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from "recharts";
import {getFromLocalStorage} from "../../utility/localStorage";

const Pages = () => {
  const [book, setBook] = useState([]);
  const readStored = getFromLocalStorage();

  useEffect(() => {
    let fakeData = [];
    readStored.map((data) => {
      let its = {
        name: data.book_name,
        uv: data.total_pages,
        pv: 1596,
        amt: 4000,
      };
      fakeData = [...fakeData, its];
    });

    setBook(fakeData);
  }, [readStored]);
  const data = [...book];

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "#23be0a",
    "#59c6d2",
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const {fill, x, y, width, height} = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-4">
      <BarChart
        width={1500}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{position: "top"}}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Pages;
