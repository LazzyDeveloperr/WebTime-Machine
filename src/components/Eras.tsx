import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, Globe, Monitor, Moon, Sun, Sparkles, Box, ChevronDown, User, Heart, MessageCircle, Share2, Search, ArrowRight, Activity, Command, X, Smartphone } from 'lucide-react';

export const EraWeb1 = () => {
  const [visited, setVisited] = useState<Record<string, boolean>>({});
  const [showInfo, setShowInfo] = useState(true);

  return (
    <section id="era-1991" className="relative min-h-screen bg-[#008080] font-['Times_New_Roman',_serif] text-[#000] border-b border-white/5 flex justify-center items-center py-20 px-4 cursor-[url('/cursor-default.png'),_auto]">
      <div className="absolute top-4 left-4 font-bold text-xs bg-white text-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">1991 - Web 1.0</div>
      
      {/* Browser Frame */}
      <div className="max-w-4xl w-full bg-[#c0c0c0] border-[3px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] relative z-10">
        {/* Title Bar */}
        <div className="bg-[#000080] text-white p-1 px-2 flex justify-between items-center select-none">
          <div className="font-bold text-sm tracking-wider flex items-center gap-2">
            <Globe size={14} /> NCSA Mosaic - Welcome to my Homepage!
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-[#808080] border-r-[#808080] border-[2px]"></div>
            <div className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-[#808080] border-r-[#808080] border-[2px]"></div>
            <div className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-b-[#808080] border-r-[#808080] border-[2px]"></div>
          </div>
        </div>
        {/* URL Bar */}
        <div className="bg-[#c0c0c0] p-2 flex gap-2 items-center border-b-[2px] border-[#808080]">
          <span className="text-sm">Location:</span>
          <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex-1 px-2 py-0.5 text-sm truncate font-mono">
            http://info.cern.ch/hypertext/WWW/TheProject.html
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-[#c0c0c0] p-8 h-[600px] overflow-y-auto border-4 border-t-[#808080] border-l-[#808080] border-b-white border-r-white m-2">
          <h1 className="text-4xl text-center text-black font-bold mb-4 font-serif uppercase tracking-widest">Welcome to my Homepage!</h1>
          <hr className="border-t-[2px] border-black mb-6" />
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4 bg-yellow-200 font-bold p-1 italic border border-black border-dashed">
                <marquee>Hello surfer, you are visitor #000402 today!</marquee>
              </p>
              <p className="mb-4 leading-relaxed">
                Hi, I'm Alex. This is my little corner on the Information Superhighway. I built this HTML document using Notepad to share my favorite things with the World Wide Web.
              </p>
              
              <h3 className="font-bold underline mb-2">My Hobbies:</h3>
              <ul className="list-disc pl-8 mb-6 space-y-1 text-blue-800">
                <li>Surfing the Net</li>
                <li>Collecting MIDI files</li>
                <li>Star Trek TNG Fan Fiction</li>
              </ul>

              <div className="bg-[#000080] text-white p-3 border-4 border-[ridge] border-gray-400 text-center font-bold">
                BEST VIEWED WITH NETSCAPE NAVIGATOR 3.0
              </div>
            </div>
            
            <div className="md:w-64 flex flex-col items-center">
              <Globe size={64} className="text-gray-800 animate-spin mb-4" style={{ animationDuration: '4s' }} />
              <div className="border border-black bg-[#ffffcc] p-4 w-full mb-4">
                <h4 className="font-bold border-b border-black mb-2 pb-1">Sign Guestbook</h4>
                <input type="text" placeholder="Name" className="w-full mb-2 border border-[#808080] border-t-2 border-l-2 border-b-white border-r-white px-1 py-0.5" />
                <textarea placeholder="Message" className="w-full mb-2 border border-[#808080] border-t-2 border-l-2 border-b-white border-r-white px-1 py-0.5 h-16"></textarea>
                <button className="border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] px-3 font-bold active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white">Submit</button>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Under_construction.gif" alt="Under Construction" className="w-[120px] grayscale contrast-200" />
              <span className="font-mono text-xs mt-2 font-bold animate-pulse text-red-600">PAGE UNDER CONSTRUCTION</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black text-center text-sm">
            <a href="#" className="text-blue-800 underline mx-2 hover:text-red-600">Home</a> | 
            <a href="#" className="text-blue-800 underline mx-2 hover:text-red-600">Links</a> | 
            <a href="#" className="text-blue-800 underline mx-2 hover:text-red-600">Webring</a> | 
            <a href="#" className="text-blue-800 underline mx-2 hover:text-red-600">Email Me</a>
          </div>
        </div>
      </div>
      
      {/* Era Tech Insight Card */}
      {showInfo && (
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 left-4 max-w-xs bg-[#ffffcc] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 font-sans text-sm text-black"
        >
          <div className="flex justify-between items-center mb-2 border-b border-black pb-1">
            <strong className="uppercase tracking-wider text-red-700">Tech Inspector</strong>
            <button onClick={() => setShowInfo(false)} className="font-bold border border-black px-1 hover:bg-black hover:text-white">X</button>
          </div>
          <p className="mb-2"><strong>Layout:</strong> Tables & Frames</p>
          <p className="mb-2"><strong>Styling:</strong> Inline `bgcolor`, `font` tags. No CSS yet.</p>
          <p><strong>Vibe:</strong> Chaotic, personal, raw. The web was a place for hobbyists.</p>
        </motion.div>
      )}

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/50 opacity-80"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest mb-1 font-sans">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export const EraEarlyCSS = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
  <section id="era-2004" className="relative min-h-screen bg-[#c8d6e5] font-sans text-[#333] border-b border-white/5 flex py-20 px-4 justify-center items-center">
    <div className="absolute top-4 left-4 text-xs bg-[#003366] text-white px-2 py-1 uppercase tracking-tighter font-bold z-20">2004 - The CSS Era</div>
    
    {/* IE / Early Web Browser Frame */}
    <div className="max-w-4xl w-full bg-[#ece9d8] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-t-lg overflow-hidden border border-[#0055eb] relative z-10 transition-transform duration-500 hover:scale-[1.01]">
      {/* Title Bar like Win XP */}
      <div className="bg-gradient-to-b from-[#0058e6] to-[#0040ab] text-white py-1 px-3 flex justify-between items-center shadow-inner">
        <div className="font-bold text-sm tracking-tight drop-shadow-md italic">Internet Explorer</div>
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-blue-400 rounded-sm border border-blue-200"></div>
          <div className="w-5 h-5 bg-blue-400 rounded-sm border border-blue-200"></div>
          <div className="w-5 h-5 bg-red-500 rounded-sm border border-red-300 text-white flex items-center justify-center text-xs font-bold font-sans hover:bg-red-600 cursor-default">X</div>
        </div>
      </div>
      {/* UI Ribbon */}
      <div className="bg-[#ece9d8] p-2 flex gap-2 items-center border-b border-gray-300">
        <div className="flex gap-1">
          <button className="px-2 py-1 bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-300 rounded text-xs flex items-center gap-1"><ArrowRight size={12} className="rotate-180 text-green-700"/> Back</button>
          <button className="px-2 py-1 bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-300 rounded text-xs flex items-center gap-1 text-gray-400"><ArrowRight size={12} className="text-gray-400"/></button>
        </div>
        <div className="text-xs text-gray-600 px-2">Address</div>
        <div className="bg-white border border-gray-400 flex-1 px-2 py-0.5 text-xs truncate shadow-inner text-gray-800">
          http://techinsights.net/blog/power-of-floated-layouts
        </div>
      </div>

      {/* Website Body */}
      <div className="bg-white flex flex-col min-h-[500px]">
        <div className="bg-[#003366] text-white py-6 px-8 flex flex-col items-start justify-center border-b-4 border-[#ff9900]">
          <h1 className="font-bold text-3xl tracking-tight mb-1 font-['Trebuchet_MS',_sans-serif]">TechInsights Blog</h1>
          <p className="text-sm text-blue-200 italic">Exploring the evolution of CSS and structural markup.</p>
        </div>
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-48 bg-[#e9ecef] border-r border-gray-300">
            <div className="bg-[#d0d6e2] font-bold text-[#003366] px-4 py-2 border-b border-gray-300">Navigation</div>
            <div className="flex flex-col p-2 space-y-1">
              {['Home', 'Archives', 'About CSS', 'Contact', 'RSS Feed'].map((item, i) => (
                <motion.a 
                  href="#"
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="text-sm text-[#003366] hover:text-[#ff9900] hover:underline px-2 py-1 block"
                >
                  › {item}
                </motion.a>
              ))}
            </div>
            <div className="mt-4 bg-[#d0d6e2] font-bold text-[#003366] px-4 py-2 border-y border-gray-300">Blogroll</div>
            <div className="flex flex-col p-2 space-y-1 text-sm text-[#003366]">
              <a href="#" className="hover:underline">A List Apart</a>
              <a href="#" className="hover:underline">CSS Zen Garden</a>
              <a href="#" className="hover:underline">Smashing Magazine</a>
            </div>
          </div>
          <div className="flex-1 p-8 bg-white h-[450px] overflow-y-auto">
            <h2 className="text-[#003366] text-2xl font-normal border-b border-dashed border-gray-400 pb-2 mb-4">The Power of Floated Layouts</h2>
            <p className="text-xs text-gray-500 mb-6 font-bold uppercase tracking-wide">Posted on October 12, 2004 by Admin</p>
            
            <div className="float-right bg-gray-100 border border-gray-300 p-3 ml-4 mb-2 w-48 text-sm italic text-gray-600 shadow-sm leading-relaxed">
              "Tables are for tabular data, not layout. Embrace the div and float properties."
            </div>
            
            <p className="mb-4 text-sm leading-relaxed text-gray-800 text-justify">
              It is time to leave the table-based layouts of the 90s behind. With Cascading Style Sheets (CSS), we can cleanly separate content from presentation.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-800 text-justify">
              By utilizing the <code className="bg-gray-200 px-1 text-[#003366] border border-gray-300 font-mono text-xs">float</code> property alongside <code className="bg-gray-200 px-1 text-[#003366] border border-gray-300 font-mono text-xs">clear</code>, developers can construct robust, multi-column designs that degrade gracefully and load much faster. Clean semantic markup means better SEO and accessibility!
            </p>
            
            <div className="mt-8 bg-[#f5f8fa] border border-gray-200 p-4 rounded-sm">
              <h4 className="font-bold text-sm mb-2 text-[#003366]">Comments (2)</h4>
              <div className="text-xs mb-2 pb-2 border-b border-gray-200"><span className="font-bold text-[#ff9900]">CSS_Guru</span> says: Finally, a blog that gets it! CSS is the future.</div>
              <div className="text-xs"><span className="font-bold text-[#ff9900]">Webmaster99</span> says: But what about IE5 support? Float is so buggy on older browsers...</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Era Tech Insight Card */}
    {showInfo && (
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 left-4 max-w-xs bg-white border border-[#003366] rounded-md shadow-2xl z-50 font-sans text-sm text-gray-800 overflow-hidden"
      >
        <div className="bg-[#003366] text-white flex justify-between items-center px-3 py-2">
          <strong className="uppercase tracking-wider text-xs">Tech Inspector</strong>
          <button onClick={() => setShowInfo(false)} className="text-white hover:text-red-400">X</button>
        </div>
        <div className="p-4">
          <p className="mb-2"><strong>Layout:</strong> Divs, block/inline, and Floats</p>
          <p className="mb-2"><strong>Styling:</strong> External CSS files, Trebuchet MS, rigid grid widths (often 800px or 960px).</p>
          <p><strong>Vibe:</strong> Structured, readable, separation of concerns. Semantic HTML.</p>
        </div>
      </motion.div>
    )}
  </section>
  );
};

export const EraWeb2 = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
  <section id="era-2010" className="relative min-h-screen bg-[#ccddee] font-sans flex justify-center items-center overflow-hidden border-b border-white/10 p-4">
    <div className="absolute top-4 left-4 font-sans text-[10px] font-black text-[#1a73e8] uppercase bg-white px-2 py-1 rounded shadow-sm z-20">2010 - Web 2.0</div>
    
    {/* Chrome/Safari modern browser frame */}
    <div className="max-w-4xl w-full bg-gray-100 rounded-t-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-300 relative z-10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-shadow duration-700">
      {/* Mac OS style Window Frame */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-2 px-4 flex items-center border-b border-gray-400">
        <div className="flex gap-2 mr-6">
          <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500 hover:bg-red-500 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500 hover:bg-yellow-500 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500 hover:bg-green-500 shadow-inner"></div>
        </div>
        <div className="flex-1 bg-white border border-gray-300 rounded-full px-3 py-0.5 text-xs text-center text-gray-500 shadow-inner max-w-md mx-auto truncate font-mono">
          https://connectr.app
        </div>
        <div className="w-16"></div> {/* spacer */}
      </div>

      <div className="bg-[#f0f2f5] p-0 md:p-8 flex justify-center items-center h-[600px] overflow-y-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
          className="bg-white rounded-xl shadow-[0_15px_35px_rgba(26,115,232,0.15)] relative max-w-2xl w-full border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-b from-[#1a73e8] to-[#0f52b3] p-4 text-white flex justify-between items-center shadow-[inset_0_1px_rgba(255,255,255,0.4)]">
            <h2 className="font-bold text-2xl tracking-tighter drop-shadow-md flex items-center gap-2">
              <div className="bg-white text-[#1a73e8] p-1 rounded-md shadow-sm"><Activity size={20} /></div>
              Connectr
            </h2>
            <div className="flex gap-3">
              <span className="text-sm font-semibold opacity-80 hover:opacity-100 cursor-pointer">Log In</span>
              <span className="text-sm font-semibold bg-white text-[#0f52b3] px-3 py-1 rounded-full shadow-sm hover:bg-blue-50 cursor-pointer">Sign Up</span>
            </div>
          </div>
          
          <div className="p-6 md:p-8 bg-[#f5f8fa] flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm relative overflow-hidden mb-6">
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-gray-50 to-transparent"></div>
                <div className="relative z-10 flex gap-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-md border border-blue-400 shadow-sm flex-shrink-0 flex items-center justify-center text-blue-600"><User size={24}/></div>
                   <div className="w-full">
                     <textarea className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 text-sm text-gray-700 h-16 resize-none focus:outline-none focus:border-[#1a73e8] focus:bg-white transition-colors shadow-inner" placeholder="What are you up to right now?"></textarea>
                     <div className="flex justify-end mt-2">
                       <motion.button 
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="bg-gradient-to-b from-[#4da0ff] to-[#1a73e8] border border-[#0f52b3] text-white text-xs font-bold py-1.5 px-4 rounded shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)]"
                       >
                         Post Update
                       </motion.button>
                     </div>
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Sarah Jenkins', time: '2 hours ago', text: 'Just exploring this new Web 2.0 app. The rounded corners are so glossy! ✨' },
                  { name: 'Mike Ross', time: '5 hours ago', text: 'Finally updated my status. Gradients everywhere!' }
                ].map((post, i) => (
                  <div key={i} className="flex gap-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-gray-200 rounded-md border border-gray-300"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-[#1a73e8] text-sm hover:underline cursor-pointer">{post.name}</span>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{post.text}</p>
                      <div className="mt-2 flex gap-4 text-xs font-semibold text-[#1a73e8]">
                        <span className="hover:underline cursor-pointer">Like</span>
                        <span className="hover:underline cursor-pointer">Comment</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-48 space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <h3 className="bg-gray-100 text-gray-600 font-bold text-xs uppercase p-2 border-b border-gray-200">Suggested Friends</h3>
                <div className="p-3 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square bg-gradient-to-b from-gray-100 to-gray-200 rounded border border-gray-300 hover:border-[#1a73e8] cursor-pointer shadow-inner"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Era Tech Insight Card */}
    {showInfo && (
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 left-4 max-w-xs bg-white border border-[#1a73e8] rounded-xl shadow-[0_15px_30px_rgba(26,115,232,0.2)] z-50 font-sans text-sm text-gray-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#1a73e8] to-[#0f52b3] text-white flex justify-between items-center px-4 py-2 border-b border-[#0f52b3]">
          <strong className="uppercase tracking-wider text-xs font-bold">Tech Inspector</strong>
          <button onClick={() => setShowInfo(false)} className="text-white hover:text-blue-200">X</button>
        </div>
        <div className="p-5 bg-gradient-to-b from-white to-gray-50 text-xs">
          <p className="mb-3"><strong>Layout:</strong> AJAX, Dynamic DOM manipulation (jQuery).</p>
          <p className="mb-3"><strong>Styling:</strong> CSS3! Glossy buttons, heavy drop shadows, rounded corners (`border-radius`), gradients.</p>
          <p><strong>Vibe:</strong> Social, interactive, "App-like". The era of rounded corners and user-generated content.</p>
        </div>
      </motion.div>
    )}
  </section>
  );
};

export const EraResponsive = () => {
  const [deviceWidth, setDeviceWidth] = useState('100%');
  const [showInfo, setShowInfo] = useState(true);

  return (
  <section id="era-2016" className="relative min-h-screen bg-[#e5e7eb] flex justify-center items-center py-20 px-4 sm:px-8 border-b border-gray-200 text-black">
    <div className="absolute top-4 left-4 text-[10px] tracking-widest font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm uppercase z-20">2016 - Mobile First Era</div>
    
    <div className="absolute top-8 md:top-20 right-8 flex gap-2 z-20 bg-white p-2 rounded-lg shadow-md border border-gray-200">
       <button onClick={() => setDeviceWidth('320px')} className={`px-3 py-1 text-xs font-medium rounded ${deviceWidth === '320px' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}>Mobile</button>
       <button onClick={() => setDeviceWidth('768px')} className={`px-3 py-1 text-xs font-medium rounded hidden md:block ${deviceWidth === '768px' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}>Tablet</button>
       <button onClick={() => setDeviceWidth('100%')} className={`px-3 py-1 text-xs font-medium rounded hidden md:block ${deviceWidth === '100%' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}>Desktop</button>
    </div>

    <div className="w-full max-w-5xl flex justify-center overflow-hidden p-4">
      <motion.div 
        animate={{ width: deviceWidth }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        className="bg-white border-4 border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[2rem] overflow-hidden flex flex-col md:flex-row group h-[600px] relative mt-12 md:mt-0"
      >
        {/* Device camera notch/bezel simulation */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-50 transition-opacity duration-300 flex justify-center items-center ${deviceWidth === '320px' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-1 rounded-full bg-gray-700"></div>
        </div>

        {/* Mobile/Sidebar Nav */}
        <div className={`bg-[#111827] text-white p-5 flex flex-col items-center md:items-start shrink-0 transition-all duration-700 pt-8 md:pt-5 z-40 ${deviceWidth === '320px' ? 'w-full h-16 flex-row justify-between pb-4' : 'w-20 sm:w-56 h-full'}`}>
          <div className="font-bold tracking-widest text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center shrink-0">
              <Box size={16} />
            </div>
            <motion.span animate={{ opacity: deviceWidth === '320px' ? 0 : 1 }} className="hidden sm:block whitespace-nowrap overflow-hidden">FLEX APP</motion.span>
          </div>
          <button className="md:hidden p-2 bg-gray-800 rounded hover:bg-gray-700"><Menu size={20}/></button>
          
          <div className={`flex-col gap-1 w-full mt-10 ${deviceWidth === '320px' ? 'hidden' : 'flex'}`}>
            {['Dashboard', 'Analytics', 'Projects', 'Settings'].map((link, i) => (
              <a href="#" key={i} className={`px-3 py-2 rounded text-sm ${i === 0 ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'} transition-colors block overflow-hidden whitespace-nowrap`}>
                {link}
              </a>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-gray-50 flex flex-col transition-all duration-700 overflow-y-auto">
          {/* Flat Header */}
          <div className="bg-white border-b border-gray-200 p-4 sm:px-8 flex justify-between items-center shadow-sm shrink-0">
            <h2 className="text-xl font-semibold text-gray-800 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">Dashboard</h2>
            <div className="flex items-center gap-3">
               <div className={`relative ${deviceWidth === '320px' ? 'hidden' : 'block'}`}>
                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input type="text" placeholder="Search..." className="bg-gray-100 border-none rounded-full py-1.5 pl-9 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full max-w-[150px] lg:max-w-[200px]" />
               </div>
               <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0 border-2 border-white shadow-sm"></div>
            </div>
          </div>

          {/* Content area */}
          <div className="p-4 sm:p-6 space-y-6 flex-1 bg-gray-50">
            {/* Hero Banner inside app */}
            <div className="w-full bg-indigo-600 rounded-xl p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-md isolate relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-2xl z-0"></div>
              <div className="relative z-10">
                 <h3 className="text-xl md:text-2xl font-bold mb-1">Mobile First Design</h3>
                 <p className="text-indigo-200 text-sm max-w-md">Try resizing this view. Flexbox and CSS Grids allowed content to fluidly wrap onto any screen.</p>
              </div>
            </div>
            
            {/* Flat Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-8">
              {[
                { title: 'Total Views', stat: '12,402', color: 'bg-emerald-500' },
                { title: 'New Users', stat: '842', color: 'bg-blue-500' },
                { title: 'Conversion', stat: '4.2%', color: 'bg-purple-500' },
                { title: 'Bounce Rate', stat: '52%', color: 'bg-orange-500' },
                { title: 'Active Timers', stat: '14', color: 'bg-teal-500' }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4, shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:border-indigo-100 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{card.title}</h4>
                    <div className={`w-2 h-2 rounded-full ${card.color}`}></div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">{card.stat}</div>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">↑ 12% from last week</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Era Tech Insight Card */}
    {showInfo && (
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 left-4 max-w-xs bg-white border border-gray-200 rounded-xl shadow-2xl z-50 font-sans text-sm text-gray-800 overflow-hidden"
      >
        <div className="bg-indigo-600 text-white flex justify-between items-center px-4 py-3">
          <strong className="uppercase tracking-wider text-xs font-bold flex items-center gap-2"><Smartphone size={14}/> Tech Inspector</strong>
          <button onClick={() => setShowInfo(false)} className="text-white/70 hover:text-white transition-colors"><X size={16}/></button>
        </div>
        <div className="p-5 text-gray-600 text-xs leading-relaxed space-y-3">
          <p><strong>Layout:</strong> Flexbox, Media Queries (Responsive Web Design).</p>
          <p><strong>Styling:</strong> "Flat Design" became standard. Gradients and heavy shadows were replaced with clean, solid colors, ample whitespace, and subtle borders.</p>
          <p><strong>Vibe:</strong> Utilitarian, clean, "SaaS Dashboard". Everything must work on an iPhone.</p>
        </div>
      </motion.div>
    )}
  </section>
  );
};

export const EraModern = () => {
  const [isDark, setIsDark] = React.useState(true);
  const [showInfo, setShowInfo] = useState(true);
  
  return (
    <section id="era-2022" className={`relative min-h-screen transition-colors duration-1000 flex flex-col justify-center items-center overflow-hidden border-b border-white/5 ${isDark ? 'bg-[#0a0a0a] text-white/90' : 'bg-[#fafafa] text-gray-900'}`}>
      <div className="absolute top-4 left-4 text-[10px] font-mono uppercase z-20 text-gray-500">2022 - Present</div>
      <div className="absolute top-8 right-8 font-mono text-[10px] opacity-40 z-20 flex items-center gap-4 text-gray-500">
        theme: {isDark ? 'dark' : 'light'}
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full transition-all backdrop-blur-md border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-black/5 border-black/10 hover:bg-black/10 text-black'}`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full flex flex-col items-center z-10 px-6 pt-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-8 backdrop-blur-sm transition-colors duration-1000
          ${isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-black/5 border-black/10 text-gray-600'}">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Bento Grid UI Focus
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 text-center">
          Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Elevated.</span>
        </h1>
        <p className={`text-center max-w-xl mx-auto mb-16 text-lg md:text-xl transition-colors duration-1000 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Dark mode by default, glassmorphism, subtle borders, and huge typography defining the modern aesthetic.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 w-full max-w-4xl mx-auto h-[500px]">
          {/* Main large card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className={`md:col-span-2 md:row-span-2 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden transition-all duration-1000 border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 shadow-xl hover:shadow-2xl'}`}
          >
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -mr-20 -mt-20 opacity-50 transition-colors ${isDark ? 'bg-blue-500/30' : 'bg-blue-400/20'}`}></div>
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                <Command size={24} />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">Keyboard First</h3>
              <p className={`text-sm md:text-base max-w-md ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Command palettes became the standard way to navigate complex applications, avoiding deeply nested menus.</p>
            </div>
          </motion.div>

          {/* Top small card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-1000 border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 shadow-lg'}`}
          >
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-xl backdrop-blur-md ${isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'}`}>
                 <Heart size={18} />
              </div>
              <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>+2.4k</span>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>98%</div>
              <div className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Engagement Rate</div>
            </div>
          </motion.div>

          {/* Bottom small card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className={`rounded-3xl p-6 flex flex-col justify-center items-center text-center transition-all duration-1000 border ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-white/10 hover:border-white/20' : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100 shadow-lg hover:shadow-xl'}`}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 mb-4 p-[2px]">
              <div className={`w-full h-full rounded-full ${isDark ? 'bg-[#151515]' : 'bg-white'} flex items-center justify-center`}>
                <Sparkles size={20} className={isDark ? 'text-white' : 'text-purple-600'} />
              </div>
            </div>
            <h4 className="font-bold mb-1">AI Integration</h4>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>The beginning of smart features</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Era Tech Insight Card */}
      {showInfo && (
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className={`absolute bottom-8 left-4 max-w-xs border rounded-2xl shadow-2xl z-50 font-sans text-sm overflow-hidden backdrop-blur-xl ${isDark ? 'bg-[#151515]/80 border-white/10 text-gray-300' : 'bg-white/80 border-gray-200 text-gray-600'}`}
        >
          <div className={`flex justify-between items-center px-4 py-3 border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
            <strong className={`uppercase tracking-wider text-xs font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}><Command size={14}/> Inspector</strong>
            <button onClick={() => setShowInfo(false)} className={`transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-800'}`}><X size={16}/></button>
          </div>
          <div className="p-5 text-xs leading-relaxed space-y-3">
            <p><strong>Layout:</strong> CSS Grid, Bento patterns, Auto-layout.</p>
            <p><strong>Styling:</strong> Glassmorphism (`backdrop-filter`), extremely subtle 1px gradients, soft blurred shadows, high-contrast typography, dark mode by default.</p>
            <p><strong>Vibe:</strong> Cinematic, premium, "developer-tool" aesthetic inspired by Linear and Vercel.</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export const EraNearFuture = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
  <section id="era-2025" className="relative min-h-screen bg-[#050505] flex items-center justify-center p-4 sm:p-8 overflow-hidden font-sans border-b border-white/20">
    <div className="absolute top-4 left-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase z-20">2025: Intelligent Interfaces</div>
    
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full max-w-4xl bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 sm:p-10 relative z-10 shadow-2xl flex flex-col items-center"
    >
      <div className="w-full mb-8">
        <div className="flex gap-4 items-center">
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
             <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
               <Sparkles className="text-indigo-400 w-5 h-5" />
             </div>
           </div>
           <div className="bg-white/5 border border-white/10 p-4 rounded-b-2xl rounded-tr-2xl backdrop-blur-md rounded-tl-sm w-full relative">
             <p className="text-sm text-gray-300">I've analyzed your requirements. I'm dynamically generating a UI layout tailored perfectly to your current context. The interface will adapt as we interact.</p>
           </div>
        </div>
      </div>
      
      {/* Dynamic generative UI area */}
      <div className="w-full p-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl mb-4">
        <div className="w-full bg-black/60 rounded-xl p-6 border border-white/5 relative overflow-hidden h-[300px] flex flex-col justify-end group">
           {/* Generative scanner effect */}
           <motion.div 
             animate={{ top: ['0%', '100%', '0%'] }}
             transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
             className="absolute left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.8)] z-20 pointer-events-none"
           />
           
           <div className="absolute inset-0 flex items-center justify-center text-white/5 opacity-50 text-9xl font-black">UI</div>
           
           <div className="w-full grid grid-cols-2 gap-4 relative z-10">
             <motion.div
               animate={{ opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 3, delay: 0 }}
               className="h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-end p-4 hover:bg-white/10 transition-colors cursor-pointer"
             >
               <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
             </motion.div>
             <motion.div
               animate={{ opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 3, delay: 1.5 }}
               className="h-24 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.1)] backdrop-blur-md flex flex-col justify-between p-4 cursor-pointer"
             >
               <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40">
                 <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
               </div>
               <div className="w-3/4 h-2 bg-indigo-400/50 rounded-full"></div>
             </motion.div>
           </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask me to redesign this interface..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-12 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-colors text-white placeholder-gray-500"
            disabled
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transform transition-transform hover:scale-105 my-auto">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>

    {/* Era Tech Insight Card */}
    {showInfo && (
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 left-4 max-w-xs border border-indigo-500/30 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] z-50 font-sans text-sm overflow-hidden backdrop-blur-2xl bg-[#0a0a14]/60 text-gray-300"
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-indigo-500/20">
          <strong className="uppercase tracking-wider text-xs font-bold flex items-center gap-2 text-indigo-300"><Sparkles size={14}/> Copilot Inspector</strong>
          <button onClick={() => setShowInfo(false)} className="text-white/40 hover:text-white transition-colors"><X size={16}/></button>
        </div>
        <div className="p-5 text-xs leading-relaxed space-y-3 font-mono">
          <p><span className="text-indigo-400">Layout:</span> Generated on-the-fly. No static HTML.</p>
          <p><span className="text-indigo-400">Styling:</span> Sentient components. Shimmer effects, glowing orbs, fluid transitions.</p>
          <p><span className="text-indigo-400">Vibe:</span> Magic, conversational, anticipatory. UI is ephemeral.</p>
        </div>
      </motion.div>
    )}
  </section>
  );
};

export const EraFarFuture = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <section id="era-2030" className="relative min-h-screen bg-[#02050a] flex items-center justify-center p-8 overflow-hidden" style={{ perspective: '1200px' }}>
      <div className="absolute top-4 left-4 text-[10px] font-light text-blue-300/60 uppercase tracking-[0.4em] z-20">2030+: Spatial Web</div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <motion.div 
        initial={{ rotateX: 50, scale: 0.8, opacity: 0 }}
        whileInView={{ rotateX: 10, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full max-w-6xl aspect-video border border-white/5 bg-transparent rounded-[3rem] sm:rounded-[4rem] flex justify-center items-center overflow-visible"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none rounded-[3rem] sm:rounded-[4rem]"></div>
        
        {/* Core Nexus */}
        <motion.div 
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
          whileHover={{ scale: 1.05 }}
          animate={{ translateZ: [0, 100, 0], rotateY: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute z-30 w-48 h-48 sm:w-64 sm:h-64 border border-white/20 rounded-full flex flex-col items-center justify-center mix-blend-screen bg-black/20 backdrop-blur-3xl shadow-[0_0_100px_rgba(59,130,246,0.1)] cursor-grab group"
        >
          <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_20px_#fff] mb-4 group-hover:scale-150 transition-transform"></div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 text-center font-light">
            Central Node<br/>Active
          </div>
        </motion.div>
        
        {/* Orbital Panel 1 */}
        <motion.div 
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
          animate={{ translateZ: [0, -60, 0], y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute right-[5%] top-[10%] w-64 h-80 border border-white/10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl cursor-grab hover:bg-white/5 transition-colors p-6 flex flex-col z-10"
        >
          <div className="h-10 border-b border-white/10 font-mono text-[10px] text-white/40 uppercase tracking-widest flex items-center justify-between mt-auto w-full mb-auto pb-4">
            <span>Data Stream</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-4 opacity-50">
             <div className="h-2 w-full bg-white/10 rounded-full"></div>
             <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
             <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
          </div>
        </motion.div>

        {/* Orbital Panel 2 */}
        <motion.div 
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
          animate={{ translateZ: [0, 40, 0], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-[5%] bottom-[15%] w-72 h-40 border border-white/10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl cursor-grab hover:bg-white/5 transition-colors p-5 z-40 flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full border border-blue-400/30 flex items-center justify-center shrink-0">
             <div className="w-1/2 h-1/2 rounded-full bg-blue-500/20 blur-sm"></div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
             <div className="text-xs text-white/80 font-medium">Holographic Projection</div>
             <div className="text-[10px] text-white/40">Interact physically with digital matter. No screens required.</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-center text-blue-200/40 uppercase tracking-widest leading-[2] pointer-events-none font-light">
        The interface dissolves.<br/>Data becomes environment.
      </div>

      {/* Era Tech Insight Card */}
      {showInfo && (
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 left-4 max-w-xs border border-white/5 rounded-3xl z-50 font-sans text-sm overflow-hidden backdrop-blur-3xl bg-black/20 text-white/70"
        >
          <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
            <strong className="uppercase tracking-[0.2em] text-[10px] font-light flex items-center gap-2"><Globe size={14}/> SYSTEM // DIAGNOSTIC</strong>
            <button onClick={() => setShowInfo(false)} className="text-white/30 hover:text-white transition-colors"><X size={16}/></button>
          </div>
          <div className="p-6 text-xs leading-[2] space-y-4 font-light tracking-wide">
            <p><span className="text-blue-400/70 block uppercase text-[9px] mb-1">Architecture</span> 3D Canvas, WebGL, XR/VR Integration.</p>
            <p><span className="text-blue-400/70 block uppercase text-[9px] mb-1">Physics</span> Interfaces respond to gravity, velocity, and gesture.</p>
            <p><span className="text-blue-400/70 block uppercase text-[9px] mb-1">Paradigm</span> The DOM is dead. Welcome to immersive computing.</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};
