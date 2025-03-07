using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public required Activity Activity {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly AppDbContext _context;
            public Handler(AppDbContext context)
            {
               _context = context; 
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                #pragma warning disable CA2016
                await _context.SaveChangesAsync();
                #pragma warning restore CA2016

            }
        }
    }
}