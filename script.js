let slipData
function getAdviceData(e) {
    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        dataType: 'json',
        success: function(slip) {
            slipData = slip
            advice()
        },
        error: function(error) {
            console.log('Something is wrong', error)
        }
    })
}

$('#btn').on('click', getAdviceData)

const advice = () => {
    $('#id').text(`Advice #${slipData['slip']['id']}`);
    $('#adviceText').text(`"${slipData['slip']['advice']}"`);
}
