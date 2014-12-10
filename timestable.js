// Made with no jQuery
// Usage example:
// multiplicationTable(12, 'myEl');
// Parameter 1: Number of rows and columns. Default 9.
// Parameter 2: ID of target element. Default target element is body.
/*global $,console*/
/*jslint plusplus: true, white: true, vars: true*/
//"true: white" removes indentation requirements. this is an issue with "case"
//"vars: true" removes requirement for only one var statment per function


function multiplicationTable (size, targEl) {
    var i, j, tbl, tr = [], e,
        lightblue = '#59C',
        offBackground = '#eee',
        onBackground = '#fff',
        offForeground = '#37A',
        onForeground = '#000',
        operation;

    console.log(targEl);

    // Default size is 9x9 if not specified
    size = (typeof size === 'undefined') ? 9 : size;
    targEl = (typeof targEl === 'undefined') ?
        document.body :
    document.getElementById(targEl);

    tbl = document.createElement('table');
    tbl.style.borderCollapse = 'collapse';
    tbl.style.borderSpacing = '0px';

    targEl.appendChild(tbl);
    targEl.style.border = '8px solid' + lightblue;
    // set width to div contents
    targEl.style.display = 'inline-block';

    operation = document.createElement('div');
    operation.innerHTML = 'Addition';
    operation.style.color = offForeground;
    operation.style.width = '6em';
    operation.style.margin = '0px auto';
    operation.style.fontFamily = 'Arial, Helvetica, sans-serif';
    operation.style.fontSize = '0.9em';
    operation.style.color = offForeground;
    operation.style.border = '4px solid ' + lightblue;
    operation.style.backgroundColor = offBackground;

    
    function cell() {
        var c = [],
            q = i + 1 + '&times;' + (j + 1),
            a = (i + 1) * (j + 1),
            id = i + 1 + '-' + (j + 1);

        
        c[i] = document.createElement('td');
        c[i].innerHTML = q;
        c[i].id = id;
        c[i].style.fontFamily = 'Arial, Helvetica, sans-serif';
        c[i].style.textAlign = 'center';
        c[i].style.fontSize = '0.9em';
        c[i].style.color = offForeground;
        c[i].style.width = '2.5em';
        c[i].style.height = '2.5em';
        c[i].style.border = '4px solid ' + offForeground;
        c[i].style.backgroundColor = offBackground;
        c[i].style.padding = '0px';
        c[i].style.margin = '0px';
        c[i].onmouseover = function () {
            this.innerHTML = a;
            this.style.color = onForeground;
            this.style.backgroundColor = onBackground;
        };
        c[i].onmouseout = function () {
            this.innerHTML = q;
            this.style.color = offForeground;
            this.style.backgroundColor = offBackground;
        };
        tr[j].appendChild(c[i]);
    }

    function changeCell() {
        var c = [], q, a, id;
            id = i + 1 + '-' + (j + 1);
            c[i] = document.getElementById(id);
            console.log(c[i].id);
            if (operation.innerHTML === 'Subtraction') {
                q = i + 1 + '+' + (j + 1);
                a = (i + 1) + (j + 1);
            } else if  (operation.innerHTML === 'Multiplication') {
                if ((i + 1) - (j + 1) > -1) {
                    q = i + 1 + '-' + (j + 1);
                    a = (i + 1) - (j + 1);
                } else {
                    q = j + 1 + '-' + (i + 1);
                    a = (j + 1) - (i + 1);
                }
            } else {
                q = i + 1 + '&times;' + (j + 1);
                a = (i + 1) * (j + 1);
            }
            c[i].innerHTML = q;
            c[i].onmouseover = function () {
                this.innerHTML = a;
                this.style.color = onForeground;
                this.style.backgroundColor = onBackground;
            };
            c[i].onmouseout = function () {
                this.innerHTML = q;
                this.style.color = offForeground;
                this.style.backgroundColor = offBackground;
            };
    }
    
    targEl.parentNode.insertBefore(operation, targEl.nextSibling);

    
    for(j=0;j<size;j++){
        tr[j] = document.createElement('tr');
        tbl.appendChild(tr[j]);
        for(i=0;i<size;i++){
            cell();
        }
    }

    operation.onclick = function () {
        if (this.innerHTML === 'Addition') {
            this.innerHTML = 'Subtraction';
        } else if (this.innerHTML === 'Subtraction') {
            this.innerHTML = 'Multiplication';
        } else {
            this.innerHTML = 'Addition';
        }
        for(j=0;j<size;j++){
            for(i=0;i<size;i++){
                changeCell();
            }
        }
    };

}

