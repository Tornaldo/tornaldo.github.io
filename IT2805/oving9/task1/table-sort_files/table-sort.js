
document.addEventListener('DOMContentLoaded', run, false);

function run()
{

    function sort_col(col)
    {

        var listBody = document.getElementById('the-table-body');
        var listChildren = listBody.children;
        var arr = [];

        for (var c = 0; c < listChildren.length; c++)
        {
            arr.push(listChildren[c]);
        }

        arr.sort(compareByInnerHTML(col));

        for (var c = 0; c < arr.length; c++){
            listBody.appendChild(arr[c]);
        }
    }

    function compareByInnerHTML(col){

        return function (var1, var2) {

            var x = var1.children[col].innerHTML;
            var y = var2.children[col].innerHTML;

            if(x == y){
                return 0;
            }
            else if(x > y){
                return 1;
            }
            else{
                return -1;
            }

        }

    }

    document.getElementById('sort-button-1').addEventListener('click', function(){sort_col(0)}, false);
    document.getElementById('sort-button-2').addEventListener('click', function(){sort_col(1)}, false);
    document.getElementById('sort-button-3').addEventListener('click', function(){sort_col(2)}, false);

}

