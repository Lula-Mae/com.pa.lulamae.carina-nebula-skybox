try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Carina Nebula by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.carina-nebula-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}