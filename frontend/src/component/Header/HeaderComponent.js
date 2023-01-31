function HeaderComponent() {
    return (
        <div className="Header">
            <div className="Navigation grid grid-cols-4">
                <a href="#work"><h5 class="text-xs font-bold text-gray-100 mb-6">HOME</h5></a>
                <a href="#projects"><h5 class="text-xs font-bold text-gray-100 mb-6">PROJECTS</h5></a>
                <a href="#skills"><h5 class="text-xs font-bold text-gray-100 mb-6">BLOGS</h5></a>
                <a href="#"><h5 class="text-xs font-bold text-gray-100 mb-6">CONTACT</h5></a>
            </div>
        </div>
    )
}

export default HeaderComponent;
