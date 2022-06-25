export interface Colors{
    lightColor: string;
    darkColor: string;
}
interface ColorTypes{
    [key: string ] : Colors;
}

export const colors : ColorTypes = {
    Pink: {
        lightColor : "#f2d1d1",
        darkColor: "#dbc1c1"
    },
    Blue: {
        lightColor: "#c6dce4",
        darkColor: "#daeaf1"
    },
    Green: {
        lightColor: "#c1e5ba",
        darkColor: "#b2d2ab"
    },
    Yellow: {
        lightColor: "#e3e9b3",
        darkColor: "#c9cea0"
    }
}