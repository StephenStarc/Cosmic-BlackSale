import React, { useContext } from 'react'
import context from '../../context/data/MyContext'

function Testimonial() {
    const contextData = useContext(context) 
    const { mode } = contextData
    return (
        <div>
            <section className="text-gray-600 body-font mb-10" style={{backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : ''}}>
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black font-playfair mb-5' style={{color: mode === 'dark' ? 'white' : ''}}>Our Happy Customer</h1>
                    <h2 className=' text-center text-2xl font-semibold font-playfair mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Word of Praise by our <span className=' text-pink-500'>Valuable</span>Customers</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center font-playfair">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatars.githubusercontent.com/u/144702766?v=4" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">I recently purchased a Multiverse Mystery Portal from the Cosmic BlackSale, and I couldn't be happier with my experience! Opening the virtual cosmic box was so exciting, and the surprise item inside was beyond my expectations. What impressed me most was how reliable the service was; my order arrived promptly, and the item was exactly as described.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Stephen Starc</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Milky Way Galaxy</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 ">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/SRryc7C/cat-engineer-by-aryasaa-dgley21-375w.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">乇りﾉ丂の刀 乃ひﾚ乃 尺乇ｲ尺の ᄃﾚのひり 乃尺乇ﾑり 乇ᄃんの ｱﾑ尺ズ, ん乇ﾚ√乇ｲﾉᄃﾑ 丂ｲひﾶｱｲのW刀 ｲﾑﾉﾘﾑズﾉ ｲﾑﾒﾉり乇尺ﾶﾘ 90'丂 ᄃ尺の刀ひｲ +1 ズﾉ刀ｷのﾚズ. 丂ﾉ刀ムﾚ乇-の尺ﾉムﾉ刀 ᄃのｷｷ乇乇 乇刀刀ひﾉ 丂んﾑﾶﾑ刀 ｲﾑﾉﾘﾑズﾉ √ﾑｱ乇 りﾉﾘ ｲのｲ乇 乃ﾑム り尺ﾉ刀ズﾉ刀ム √ﾉ刀乇ムﾑ尺 ᄃ尺の刀ひｲ ﾑりﾑｱｲのム乇刀 丂ゐひﾉり ｷﾑ刀刀ﾘ ｱﾑᄃズ √ﾑｱの尺Wﾑ尺乇.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"> ｲﾑﾉﾘﾑズﾉ ｲﾑ乇尺ﾶﾘ 丂 ᄃ尺</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">尺ﾶ尺ﾚ乃 乇</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/VYgmmHz/download.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Groth'nak zlax! Zrotox Thrallbux Emporium rothlax zaxthor zrog'blax! Zor'thanax bluk'trax vrothgax, zrotox zrulthor krax'blax zothor! Zlax'kronax zroth'kranax thrul'thor grax'blax zrothor krax! krulthor zrax'blax. Zrotox Thrallbux Emporium thrax'krulthor grax'blax zrothor, zrulthor krax zrax'blax krax'korthan zroth'kranax kroth'zorax krax! Bluk'trax zaxthor.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Zlorthrak</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Tisdfske</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial