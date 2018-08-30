var balance, transaction, dot, note;

balance = 0;

$('#balance').text(balance);

$('button').on('click', function (e) {
  e.preventDefault();
  if ($('select').val() === 'deposit' && parseInt($('#amountTD').val()) > 0 && ($('#notes').val().replace(/\s/g, "").length) > 0) {
    transaction = parseInt($('#amountTD').val());
    note = $('#notes').val();
    $('ul').append('<li class = "deposits">' + " " + note + '' + '<span class="transaction">' + '+ ' + transaction + '</span></li>');
    balance = adder(balance, transaction);
    console.log(balance);
    $('#balance').text(balance);
    $('#amountTD').val('');
    $('#notes').val('');

  } else if ($('select').val() === 'withdraw' && parseInt($('#amountTD').val()) > 0 && ($('#notes').val().replace(/\s/g, "").length) > 0) {
    transaction = parseInt($('#amountTD').val());
    note = $('#notes').val();
    if ((lesser(balance, transaction) > 0)) {
      $('ul').append('<li class = "withdraws">' + " " + note + ' ' + '<span class="transaction">' + '- ' + transaction + '</span></li>');
      balance = lesser(balance, transaction);
      console.log(balance);
      $('#balance').text(balance);
      $('#amountTD').val('');
      $('#notes').val('');
    } else {
      alert('Please Top Up Balance');
    }


  }
});



$('.fa-plus').on('click', function () {
  $('#textField').fadeToggle(0);
})

$('.fa-sync').on('click', function(){
  window.location.reload();
})

function adder(a, b) {
  return a + b;
};

function lesser(a, b) {
  return a - b;
}