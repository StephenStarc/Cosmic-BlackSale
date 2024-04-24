
import Navbar from "../navbar/Navbar";

export default function CartLayout({children}){
    return (
        <div>
      <Navbar />
            {children}
        </div>
    )
}