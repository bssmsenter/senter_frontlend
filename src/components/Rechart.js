import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "10시",
        uv: 300,
        pv: 100,
        amt: 2400,
    },
    {
        name: "12시",
        uv: 234,
        pv: 60,
        amt: 2210,
    },
    {
        name: "14시",
        uv: 363,
        pv: 132,
        amt: 2290,
    },
    {
        name: "16시",
        uv: 730,
        pv: 348,
        amt: 2000,
    },
    {
        name: "18시",
        uv: 893,
        pv: 560,
        amt: 2181,
    },
    {
        name: "20시",
        uv: 290,
        pv: 140,
        amt: 2500,
    },
    {
        name: "22시",
        uv: 1,
        pv: 0,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}