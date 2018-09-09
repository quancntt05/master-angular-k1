export const Colors = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'];
declare global {
    interface Window {
        myDoughnut: Chart;
    }
    interface HTMLElement {
        getContext(type: string)
    }
}

