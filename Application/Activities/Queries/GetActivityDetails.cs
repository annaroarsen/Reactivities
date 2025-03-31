using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class GetActivityDetails
    {
       public class Query : IRequest<Activity>
       {
            public string Id { get; set; } = string.Empty;
       } 

    public class Handler : IRequestHandler<Query, Activity>
    {
        private readonly AppDbContext _context;
        public Handler(AppDbContext context){
            _context = context;

        }
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {

            var activity = await _context.Activities.FindAsync(request.Id);
    
            if (activity == null)
            {
                throw new Exception("Activity not found"); // Evt. en mer spesifikk exception
            }

            return activity;
        }
        
        /** denne warning disable løste et problem tidligere - venter med å fjerne til jeg har kommet dit
        i det oppdaterte kurset
         #pragma warning disable CA2016
            return await _context.Activities.FindAsync(request.Id);
            #pragma warning restore CA2016 **/
    }
    }
}