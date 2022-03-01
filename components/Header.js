import React from 'react'
import Image from 'next/image';

function Header() {
    return (
        <div>
        <h1>Header</h1>
        {/* LEFT */}
        
        <div>
            <Image src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            />
            {/* input searchbar */}
            <div>
                
                <input type="text" placeholder="Search Blazon" />
            </div>
        </div>
        {/* CENTER */}

        {/* RIGHT */}

        </div>
    )
}

export default Header