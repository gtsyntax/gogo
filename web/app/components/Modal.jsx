import { RiCloseFill } from "react-icons/ri";

export default function Modal({ isVisible, onClose, title, children }) {
    if ( !isVisible ) return null;

    const handleClose = (event) => {
        if (event.target.id === "wrapper") onClose();
    }

    return (
        <main
            id="wrapper" 
            className="fixed inset-0 bg-brand-primary bg-opacity-25 backdrop-blur-sm z-40 flex justify-center items-center"
            onClick={handleClose}
        >
            <div className="w-[500px] bg-white rounded-md py-8 px-8">
                <div className="grid grid-cols-12 items-center mb-8">
                    <p className="col-span-11 text-center font-bold text-brand-primary text-xl">{title}</p>
                    <div className="flex justify-end">
                        <RiCloseFill className="cursor-pointer" size={20} onClick={() => onClose()}/>
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </main>
    )
}
