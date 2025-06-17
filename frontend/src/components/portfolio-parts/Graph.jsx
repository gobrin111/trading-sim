import React, {useState} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts';

export default function Graph() {
    const [timeframe, setTimeframe] = useState('1D');

    // Sample portfolio data
    const data = [
        { time: '9:30', value: 10000, timestamp: '9:30 AM' },
        { time: '10:00', value: 10120, timestamp: '10:00 AM' },
        { time: '10:30', value: 10080, timestamp: '10:30 AM' },
        { time: '11:00', value: 10200, timestamp: '11:00 AM' },
        { time: '11:30', value: 10350, timestamp: '11:30 AM' },
        { time: '12:00', value: 10280, timestamp: '12:00 PM' },
        { time: '12:30', value: 10420, timestamp: '12:30 PM' },
        { time: '1:00', value: 10500, timestamp: '1:00 PM' },
        { time: '1:30', value: 10380, timestamp: '1:30 PM' },
        { time: '2:00', value: 10650, timestamp: '2:00 PM' },
        { time: '2:30', value: 10750, timestamp: '2:30 PM' },
        { time: '3:00', value: 10820, timestamp: '3:00 PM' },
        { time: '3:30', value: 10780, timestamp: '3:30 PM' },
        { time: '4:00', value: 10950, timestamp: '4:00 PM' }
    ];

    const currentValue = data[data.length - 1].value;
    const startValue = data[0].value;
    const changeValue = currentValue - startValue;
    const changePercent = (changeValue / startValue) * 100;
    const isPositive = changeValue >= 0;

    const formatCurrency = (value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    const formatChange = (value) => `${value >= 0 ? '+' : ''}$${Math.abs(value).toFixed(2)}`;
    const formatPercent = (value) => `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;

    const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm">
                    <div>{formatCurrency(payload[0].value)}</div>
                    <div className="text-gray-400 text-xs">{payload[0].payload.timestamp}</div>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="bg-black text-white p-5 rounded-xl font-sans">
            {/* Header */}
            <div className="mb-6">
                <div className="text-3xl font-light mb-1 tracking-tight">
                    {formatCurrency(currentValue)}
                </div>
                <div className={`text-base flex items-center gap-2 ${isPositive ? 'text-green-400' : 'text-red-500'}`}>
                    <span>{formatChange(changeValue)}</span>
                    <span>({formatPercent(changePercent)})</span>
                    <span className="text-gray-500 text-sm">Today</span>
                </div>
            </div>

            {/* Chart */}
            {/*<div className="h-80 mb-5">*/}
            {/*    <ResponsiveContainer width="100%" height="100%">*/}
            {/*        <AreaChart*/}
            {/*            data={data}*/}
            {/*            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}*/}
            {/*        >*/}
            {/*            <defs>*/}
            {/*                <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">*/}
            {/*                    <stop offset="0%" stopColor="#00D924" stopOpacity={0.6}/>*/}
            {/*                    <stop offset="100%" stopColor="#00D924" stopOpacity={0}/>*/}
            {/*                </linearGradient>*/}
            {/*            </defs>*/}

            {/*            /!* Minimal grid *!/*/}
            {/*            <CartesianGrid*/}
            {/*                strokeDasharray="none"*/}
            {/*                stroke="#333"*/}
            {/*                horizontal={true}*/}
            {/*                vertical={false}*/}
            {/*            />*/}

            {/*            /!* Hide axes *!/*/}
            {/*            <XAxis*/}
            {/*                dataKey="time"*/}
            {/*                axisLine={false}*/}
            {/*                tickLine={false}*/}
            {/*                tick={false}*/}
            {/*            />*/}
            {/*            <YAxis*/}
            {/*                axisLine={false}*/}
            {/*                tickLine={false}*/}
            {/*                tick={false}*/}
            {/*                domain={['dataMin - 50', 'dataMax + 50']}*/}
            {/*            />*/}

            {/*            <Tooltip*/}
            {/*                content={<CustomTooltip />}*/}
            {/*                cursor={{*/}
            {/*                    stroke: '#666',*/}
            {/*                    strokeWidth: 1,*/}
            {/*                    strokeDasharray: 'none'*/}
            {/*                }}*/}
            {/*            />*/}

            {/*            /!* Area fill *!/*/}
            {/*            <Area*/}
            {/*                type="monotone"*/}
            {/*                dataKey="value"*/}
            {/*                stroke="none"*/}
            {/*                fill="url(#colorGreen)"*/}
            {/*                fillOpacity={1}*/}
            {/*            />*/}

            {/*            /!* Main line *!/*/}
            {/*            <Line*/}
            {/*                type="monotone"*/}
            {/*                dataKey="value"*/}
            {/*                stroke="#00D924"*/}
            {/*                strokeWidth={2}*/}
            {/*                dot={false}*/}
            {/*                activeDot={{*/}
            {/*                    r: 4,*/}
            {/*                    stroke: '#00D924',*/}
            {/*                    strokeWidth: 2,*/}
            {/*                    fill: '#000'*/}
            {/*                }}*/}
            {/*            />*/}
            {/*        </AreaChart>*/}
            {/*    </ResponsiveContainer>*/}
            {/*</div>*/}

            {/*/!* Time frame selector *!/*/}
            {/*<div className="flex justify-center gap-0 mt-5">*/}
            {/*    {timeframes.map((tf) => (*/}
            {/*        <button*/}
            {/*            key={tf}*/}
            {/*            onClick={() => setTimeframe(tf)}*/}
            {/*            className={`px-4 py-2 text-sm font-medium border-none cursor-pointer transition-all duration-200 hover:bg-gray-800 ${*/}
            {/*                timeframe === tf*/}
            {/*                    ? 'bg-gray-700 text-white'*/}
            {/*                    : 'bg-transparent text-gray-500'*/}
            {/*            }`}*/}
            {/*        >*/}
            {/*            {tf}*/}
            {/*        </button>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*/!* Portfolio stats *!/*/}
            {/*<div className="mt-6 pt-4 border-t border-gray-700">*/}
            {/*    <div className="grid grid-cols-3 gap-4 text-sm">*/}
            {/*        <div>*/}
            {/*            <div className="text-gray-500 mb-1">Market Value</div>*/}
            {/*            <div className="text-white font-medium">{formatCurrency(currentValue)}</div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div className="text-gray-500 mb-1">Today's Return</div>*/}
            {/*            <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-500'}`}>*/}
            {/*                {formatChange(changeValue)}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div className="text-gray-500 mb-1">Total Return</div>*/}
            {/*            <div className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-500'}`}>*/}
            {/*                {formatPercent(changePercent)}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}