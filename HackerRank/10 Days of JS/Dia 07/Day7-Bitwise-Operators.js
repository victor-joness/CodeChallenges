//Hoje, estamos praticando operações bit a bit . Confira o tutorial em anexo para mais detalhes.

function getMaxLessThanK(n, k) {
    let max = 0;
    let currentValue = 0;
    for (let x = 1; x < k; x++) 
    {
        for (let y = x + 1; y <= n; y++) 
        {
            currentValue = x & y;
            if (currentValue < k && currentValue > max) 
            {
                max = currentValue;
            }
        }
    }
    return max;
}
