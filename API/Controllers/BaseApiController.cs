using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")] 
    
    //omstrukturering for å håndtere null-problematikk - underveis i oppdateringen 
    public class BaseApiController : ControllerBase
{
    private readonly IMediator _mediator;

    public BaseApiController(IMediator mediator)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    protected IMediator Mediator => _mediator;
}


    //Koden jeg hadde fra før, fra den eldre versjonen av kurset
    /**
    public class BaseApiController : ControllerBase
    {
       private IMediator _mediator;

       protected IMediator Mediator => _mediator ??=
        HttpContext.RequestServices.GetService<IMediator>(); 
    }**/


}