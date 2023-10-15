import { createContext, useContext, useState } from "react";

const AuctionRoomContext = createContext("")

const useAuctionRoomContext = () => {
    return useContext(AuctionRoomContext)
}

const AuctionRoomContextProvider = ({ children }) => {
    const [isEnterAuctionRoom, setisEnterAuctionRoom] = useState("")

    const enterAuctionRoom = (id) => {
        setisEnterAuctionRoom(id)
    }

    return (
        <AuctionRoomContext.Provider value={{ isEnterAuctionRoom, enterAuctionRoom }}>
            {children}
        </AuctionRoomContext.Provider>
    )
}

export { AuctionRoomContextProvider, useAuctionRoomContext }