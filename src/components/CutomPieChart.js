import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

export const CustomPieChart = ({ wins, losses }) => {


    const total = wins + losses
    const winPerc = ((wins / total) * 100).toFixed(1)
    const losPerc = ((losses / total) * 100).toFixed(1)

    return (
        <div>
            <PieChart
                data={[
                    { title: `${winPerc}%`, value: losses, color: '#C43B52' },
                    { title: `${losPerc}%`, value: wins, color: '#138340' },
                ]}
                label={(item) => {
                    return (
                        item.dataEntry.title
                    );

                }}
                labelStyle={
                    {
                        fontSize: "8px",
                        fill: 'white',
                        fontFamily: 'Rubik',
                        fontWeight: "700",
                    }
                }
            />
        </div>
    )
}
