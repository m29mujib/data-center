const Home = () => {
    return (
        <div className="w-full h-screen flex justify-between items-center px-[8%] py-[5%]">
        <div className="flex justify-between">
            <img src="../src/assets/b.jpg" alt="" class="w-[400px] h-[400px]"/>
        </div>
        <div className="flex justify-center">
            <div>
                <div className="atas">
                    <p className="text-blue-600 font-semibold text-sm font-customFont">FEATURES</p>
                    <h2 className="font-bold text-3xl mb-3 font-customFont text-[#333]">Foud and Booking Apartment</h2>
                    <p className="max-w-[600px] text-sm font-customFont text-[#333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus suscipit nobis quia quaerat dolor aperiam neque perspiciatis quidem possimus.</p>
                </div>
                <div className="bawah flex mt-5">
                    <div className="kiri flex justify-center items-center">
                        <img src="../src/assets/slack.png" alt="" class="w-[20px] mr-5"/>
                    </div>
                    <div className="kanan">
                        <h4 className="font-semibold text-xl font-customFont text-[#333]">dolor sit amet consectetur.</h4>
                        <p className="max-w-[400px] text-xs font-customFont text-[#333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, unde. Possimus facere qui ea impedit?</p>
                    </div>
                </div>
                <div className="bawah flex mt-5">
                    <div className="kiri flex justify-center items-center">
                        <img src="../src/assets/cal.png" alt="" class="w-[20px] mr-5"/>
                    </div>
                    <div className="kanan">
                        <h4 className="font-semibold text-xl font-customFont text-[#333]">Lorem ipsum dolor sit amet.</h4>
                        <p className="max-w-[400px] text-xs font-customFont text-[#333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, unde. Possimus facere qui ea impedit?</p>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    )
}

export default Home