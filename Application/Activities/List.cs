using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly AppDbContext _context;
        

            public Handler(AppDbContext context)
            {
                _context = context;
            }
            public async Task<List<Activity>> Handle(Query request, CancellationToken token)
            {
               
                #pragma warning disable CA2016
                return await _context.Activities.ToListAsync();
                #pragma warning restore CA2016

                //optimalt hadde ToListAsync()-metoden tatt inn cancellationToken, men siden han som holder kurset ikke
                //gjør det legger jeg heller til disse linjene for å ignorere advarslene og ha lik kode som han
            }
        }
    }
}