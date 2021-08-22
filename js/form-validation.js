
$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      email: {
        required: true,
        email: true,
        telephone: {
            required: true,
        }
      },
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});