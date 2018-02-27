$(document).ready(()=> {
	$('.delete-recipe').on('click', () => {
		let id = $(this).data('data');
		let url = '/delete'+id;
		if(confirm('Delete Recipe')) {
			$.ajax({
				url: url,
				type: 'DELETE',
				success: (result) => {
					console.log('Deleting Recipe...');
					window.location.href='/recipes';
				},
				error: function(err) {
					console.log(err);
				}
			});
		}
	});

	$('.edit-recipe').on('click', () => {
		$('#editName').val($(this).data('recipe_name'));
		$('#editIng').val($(this).data('ingredients'));
		$('#editInst').val($(this).data('instructions'));
		$('#editId').val($(this).data('id'));
	});
});