const grid = document.querySelector('.parentcontainer');
    
    document.querySelectorAll('.child').forEach((item) => {
        item.addEventListener('mouseover', () => {
            // Always get the fresh original sizes before modifying them
            const originalColumns = getComputedStyle(grid).gridTemplateColumns.split(" ").map(c => c.trim());
            const originalRows = getComputedStyle(grid).gridTemplateRows.split(" ").map(c => c.trim());
    
            const computedStyle = getComputedStyle(item);
            
            // Get grid start/end positions
            const colStart = parseInt(computedStyle.gridColumnStart);
            const colEnd = parseInt(computedStyle.gridColumnEnd);
            const rowStart = parseInt(computedStyle.gridRowStart);
            const rowEnd = parseInt(computedStyle.gridRowEnd);
    
            // Modify the columns
            let newWidths = originalColumns.map((_, i) => {
                return (i + 1 >= colStart && i + 1 < colEnd) ? `5fr` : `1fr`;
            });
    
            // Modify the rows
            let newRows = originalRows.map((_, i) => {
                return (i + 1 >= rowStart && i + 1 < rowEnd) ? `5fr` : `1fr`;
            });
    
            // Apply new sizes
            grid.style.transition = "all 0.5s ease";
            grid.style.gridTemplateColumns = newWidths.join(" ");
            grid.style.gridTemplateRows = newRows.join(" ");
        });
    
        item.addEventListener('mouseout', () => {
            // Reset to original size, allowing repeated animations
            grid.style.transition = "all 0.5s ease";
            grid.style.gridTemplateColumns = "";
            grid.style.gridTemplateRows = "";
        });
    });