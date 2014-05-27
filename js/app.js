var App = {
    init: function(){        
        this.myRootRef = new Firebase('https://incandescent-fire-8371.firebaseio.com/');
    },
    save: function (item) {
        this.myRootRef.child("users").child(item.Id).set(item); 
        this.render();      
    },
    render: function(){
        var html="";
        this.myRootRef.on('value', function(snapshot) {
            var usuarios = snapshot.val();
            _.each(usuarios['users'], function(v, i){
                html+="<tr id='"+v.Id+"' data-id='"+v.Id+"'>";
                    html+="<td>"+v.name+"</td>";
                    html+="<td>"+v.address+"</td>";
                    html+="<td>"+v.cellphone+"</td>";
                    html+="<td>"+v.email+"</td>";
                    html+="<td><button class='btn btn-primary btn-xs edit-element'><span class='glyphicon glyphicon-pencil'></span></button></td>";
                    html+="<td><button class='btn btn-primary btn-xs remove-element'><span class='glyphicon glyphicon-trash'></span></button></td>";
                html+="</tr>";                
            });
            $('#tblTablaContactos > tbody').html(html);
        });

    },
    remove: function(id){        
        var onComplete = function(error) {
          if (error)
            alert('Fallo la eliminación.');
          else
            alert('Item Eliminado.');
        }
        this.myRootRef.child("users").child(id).remove();
        this.render();
    },
    update:function(item){
        console.log(item);
        /*this.myRootRef.child("users").child(item.id).update(item);  
        this.render();*/
    }

};           
