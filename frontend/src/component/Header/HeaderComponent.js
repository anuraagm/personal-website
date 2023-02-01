function HeaderComponent() {
    return (
        <div className="Header">
            <div className="Navigation flex justify-between grid grid-cols-5 md:px-24 md:py-4">
                <a href="#"><h5 class="text-xs font-bold text-gray-100 mb-6">HOME</h5></a>
                <a href="#work"><h5 class="text-xs font-bold text-gray-100 mb-6">WORK</h5></a>
                <a href="#projects"><h5 class="text-xs font-bold text-gray-100 mb-6">PROJECTS</h5></a>
                <a href="#skills"><h5 class="text-xs font-bold text-gray-100 mb-6">SKILLS</h5></a>
                <a href="#contact"><h5 class="text-xs font-bold text-gray-100 mb-6">CONTACT</h5></a>
            </div>
        </div>
    )
}

export default HeaderComponent;
